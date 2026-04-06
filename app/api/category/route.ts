import { NextRequest, NextResponse } from "next/server";
import { createCategorySchema } from "@/features/categories/schemas/category.schema";
import { categoryService } from "@/features/categories/services/category.service";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const categories = await categoryService.getCategories();
    return NextResponse.json(categories);
  } catch {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "SUPERADMIN" && session.user.role !== "ADMIN") {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();
    const parsed = createCategorySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid input", errors: parsed.error.format() },
        { status: 400 },
      );
    }

    const category = await categoryService.createCategory(parsed.data);

    return NextResponse.json(category);
  } catch (error: unknown) {
    // If Prisma throws a unique constraint error (P2002) for the 'name' field
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
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
