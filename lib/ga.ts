import { BetaAnalyticsDataClient } from "@google-analytics/data";

const client = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
});

/**
 * Fetches real-time active users, historical daily active users,
 * and the top visited pages (EXCLUDING /admin routes).
 */
export async function getActiveUsersData(
  startDate = "28daysAgo",
  endDate = "today",
) {
  const propertyId = `properties/${process.env.GA_PROPERTY_ID}`;

  // This is the filter that tells GA4 to ignore anything starting with "/admin"
  const excludeAdminFilter = {
    notExpression: {
      filter: {
        fieldName: "pagePath",
        stringFilter: {
          matchType: "BEGINS_WITH" as const,
          value: "/admin",
        },
      },
    },
  };

  try {
    const [realtimeResponse, historicalResponse, pagesResponse] =
      await Promise.all([
        // 1. Realtime Request
        // (Note: Realtime API does not support standard pagePath filtering out of the box
        // in the same way, but we keep it here to get total current site visitors)
        client.runRealtimeReport({
          property: propertyId,
          metrics: [{ name: "activeUsers" }],
        }),

        // 2. Historical Request (Totals per day)
        client.runReport({
          property: propertyId,
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "date" }],
          metrics: [{ name: "activeUsers" }],
          orderBys: [{ dimension: { dimensionName: "date" }, desc: false }],
          dimensionFilter: excludeAdminFilter, // <-- Added filter here
        }),

        // 3. Top Pages Request
        client.runReport({
          property: propertyId,
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "pageTitle" }, { name: "pagePath" }],
          metrics: [{ name: "screenPageViews" }, { name: "activeUsers" }],
          orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
          limit: 10,
          dimensionFilter: excludeAdminFilter, // <-- Added filter here
        }),
      ]);

    // --- Parse Realtime Data ---
    const realtimeRows = realtimeResponse[0].rows;
    const currentActiveUsers =
      realtimeRows && realtimeRows.length > 0
        ? parseInt(realtimeRows[0].metricValues![0].value!, 10)
        : 0;

    // --- Parse Historical Data ---
    const historicalRows = historicalResponse[0].rows || [];
    const historicalReport = historicalRows.map((row) => {
      const rawDate = row.dimensionValues![0].value!;
      const formattedDate = `${rawDate.slice(0, 4)}-${rawDate.slice(4, 6)}-${rawDate.slice(6, 8)}`;

      return {
        date: formattedDate,
        activeUsers: parseInt(row.metricValues![0].value!, 10),
      };
    });

    const totalHistoricalUsers = historicalReport.reduce(
      (sum, day) => sum + day.activeUsers,
      0,
    );

    // --- Parse Pages Data ---
    const pagesRows = pagesResponse[0].rows || [];
    const pagesReport = pagesRows.map((row) => ({
      title: row.dimensionValues![0].value,
      path: row.dimensionValues![1].value,
      views: parseInt(row.metricValues![0].value!, 10),
      users: parseInt(row.metricValues![1].value!, 10),
    }));

    // --- Return Combined Payload ---
    return {
      realtime: {
        activeUsers: currentActiveUsers,
      },
      historical: {
        total: totalHistoricalUsers,
        report: historicalReport,
      },
      pages: pagesReport,
    };
  } catch (error) {
    console.error("Error fetching GA4 data:", error);
    throw error;
  }
}
