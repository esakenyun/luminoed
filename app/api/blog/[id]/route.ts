import { NextRequest, NextResponse } from "next/server";
import { updateBlogSchema } from "@/features/blog/schemas/blog.schema";
import { blogService } from "@/features/blog/services/blog.service";
import { auth } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const blog = await blogService.getBlogById(id);

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch {
    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "SUPERADMIN" && session.user.role !== "ADMIN") {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();
    const parsed = updateBlogSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid input", errors: parsed.error.format() },
        { status: 400 },
      );
    }

    const blog = await blogService.updateBlog(id, parsed.data);

    return NextResponse.json(blog);
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      (error as any).code === "P2025"
    ) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "SUPERADMIN" && session.user.role !== "ADMIN") {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    await blogService.deleteBlog(id);

    return NextResponse.json({ message: "Blog deleted" });
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      (error as any).code === "P2025"
    ) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
