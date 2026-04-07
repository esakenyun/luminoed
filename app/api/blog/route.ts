import { NextRequest, NextResponse } from "next/server";
import { createBlogSchema } from "@/features/blog/schemas/blog.schema";
import { blogService } from "@/features/blog/services/blog.service";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    // Allow reading blogs even if not super admin, just require auth for now
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const blogs = await blogService.getBlogs();
    return NextResponse.json(blogs);
  } catch {
    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Only Admins and SuperAdmins can create blogs
    if (session.user.role !== "SUPERADMIN" && session.user.role !== "ADMIN") {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();
    const parsed = createBlogSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid input", errors: parsed.error.format() },
        { status: 400 },
      );
    }

    const blog = await blogService.createBlog(parsed.data);

    return NextResponse.json(blog);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
