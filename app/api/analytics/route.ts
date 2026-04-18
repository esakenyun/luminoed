import { NextResponse } from "next/server";
import { getActiveUsersData } from "@/lib/ga";

export async function GET(request: Request) {
  // Extract date parameters from the URL
  const { searchParams } = new URL(request.url);
  const startDate = searchParams.get("startDate") || "28daysAgo";
  const endDate = searchParams.get("endDate") || "today";

  try {
    const data = await getActiveUsersData(startDate, endDate);
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics data" },
      { status: 500 },
    );
  }
}
