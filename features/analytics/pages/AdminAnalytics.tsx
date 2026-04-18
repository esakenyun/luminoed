"use client";

import { useState, useEffect } from "react";

export default function AdminAnalyticsView() {
  // 1. User/Date Filters (Fetches new data from GA)
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  // 2. Table Filter (Filters instantly on the frontend)
  const [tableSearch, setTableSearch] = useState("");

  // State for data and UI
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data whenever dates change
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `/api/analytics?startDate=${startDate}&endDate=${endDate}`,
        );
        const data = await res.json();
        setAnalyticsData(data);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [startDate, endDate]);

  // --- FILTER THE TABLE DATA ---
  // This runs instantly whenever the user types in the search box
  const filteredPages =
    analyticsData?.pages?.filter((page: any) => {
      const searchLower = tableSearch.toLowerCase();
      return (
        page.title.toLowerCase().includes(searchLower) ||
        page.path.toLowerCase().includes(searchLower)
      );
    }) || [];

  return (
    <div>
      {/* --- FILTER USERS (Date Range) --- */}
      <div className="mb-8 flex flex-wrap items-end gap-4 rounded-lg border bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex h-64 items-center justify-center rounded-lg border border-dashed text-gray-400">
          Loading analytics data...
        </div>
      ) : analyticsData ? (
        <>
          {/* --- Summary Cards --- */}
          <div className="mb-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">
                Active Users (Last 30 mins)
              </h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">
                {analyticsData.realtime?.activeUsers || 0}
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">
                Total Users (Selected Range)
              </h3>
              <p className="mt-2 text-3xl font-bold text-green-600">
                {analyticsData.historical?.total || 0}
              </p>
            </div>
          </div>

          {/* --- FILTER TABLE (Search Bar & Table) --- */}
          <div className="mb-8 rounded-lg border bg-white shadow-sm">
            {/* Table Header & Search Input */}
            <div className="flex flex-col items-start justify-between gap-4 border-b p-4 sm:flex-row sm:items-center">
              <h3 className="text-lg font-semibold">Top Visited Pages</h3>
              <input
                type="text"
                placeholder="Search title or URL..."
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:max-w-xs"
              />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="border-b bg-gray-50 text-xs uppercase text-gray-700">
                  <tr>
                    <th className="px-6 py-4 font-medium">Page Title</th>
                    <th className="px-6 py-4 font-medium">URL Path</th>
                    <th className="px-6 py-4 font-medium">Views</th>
                    <th className="px-6 py-4 font-medium">Unique Users</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredPages.length > 0 ? (
                    filteredPages.map((page: any, index: number) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {page.title}
                        </td>
                        <td className="px-6 py-4 font-mono text-xs">
                          {page.path}
                        </td>
                        <td className="px-6 py-4">{page.views}</td>
                        <td className="px-6 py-4">{page.users}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-8 text-center text-gray-500"
                      >
                        {analyticsData.pages?.length === 0
                          ? "No page visit data available for this date range."
                          : "No pages match your search."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
