import { NextRequest, NextResponse } from "next/server";
import { updateCategorySchema } from "@/features/categories/schemas/category.schema";
import { categoryService } from "@/features/categories/services/category.service";
import { auth } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const category = await categoryService.getCategoryById(id);

    if (!category) {
      return NextResponse.json(
        { message: "Category not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(category);
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
    const parsed = updateCategorySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid input", errors: parsed.error.format() },
        { status: 400 },
      );
    }

    const category = await categoryService.updateCategory(id, parsed.data);

    return NextResponse.json(category);
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      (error as any).code === "P2002"
    ) {
      return NextResponse.json(
        { message: "Category name already exists" },
        { status: 409 },
      );
    }
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      (error as any).code === "P2025"
    ) {
      return NextResponse.json(
        { message: "Category not found" },
        { status: 404 },
      );
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

    await categoryService.deleteCategory(id);

    return NextResponse.json({ message: "Category deleted" });
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      (error as any).code === "P2025"
    ) {
      return NextResponse.json(
        { message: "Category not found" },
        { status: 404 },
      );
    }
    // E.g., foreign key constraints if blogs are attached
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      (error as any).code === "P2003"
    ) {
      return NextResponse.json(
        { message: "Cannot delete category in use by blogs" },
        { status: 409 },
      );
    }
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
