import { NextRequest, NextResponse } from "next/server";
import { blogService } from "@/features/blog/services/blog.service";

const DEFAULT_LIMIT = 5;
const MAX_LIMIT = 20;

/**
 * GET /api/blog/public?page=1&limit=5
 *
 * Public, unauthenticated endpoint for the blog listing page.
 * Returns paginated published blogs with author and category data.
 * Heavy `content` field is excluded to keep responses small.
 *
 * Response shape:
 * {
 *   blogs:   BlogCard[],
 *   total:   number,
 *   page:    number,
 *   limit:   number,
 *   hasMore: boolean,
 * }
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;

    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
    const limit = Math.min(
      MAX_LIMIT,
      Math.max(1, parseInt(searchParams.get("limit") ?? String(DEFAULT_LIMIT), 10)),
    );

    const result = await blogService.getPublishedBlogs(page, limit);

    return NextResponse.json(
      { ...result, page, limit },
      {
        status: 200,
        headers: {
          // Cache at the CDN/browser for 60 s — stale-while-revalidate for 300 s
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      },
    );
  } catch (error) {
    console.error("[GET /api/blog/public] error:", error);
    return NextResponse.json({ message: "Failed to fetch blogs" }, { status: 500 });
  }
}
