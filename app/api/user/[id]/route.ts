import { NextRequest, NextResponse } from "next/server";
import { updateUserSchema } from "@/features/users/schemas/user.schema";
import { userService } from "@/features/users/services/user.service";
import { auth } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const numericId = Number(id);

  if (isNaN(numericId)) {
    return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
  }

  const user = await userService.getUserById(numericId);

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const numericId = Number(id);

  if (isNaN(numericId)) {
    return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
  }

  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "SUPERADMIN") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  const parsed = updateUserSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.format() },
      { status: 400 },
    );
  }

  const user = await userService.updateUser(numericId, parsed.data);

  return NextResponse.json(user);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const numericId = Number(id);

  if (isNaN(numericId)) {
    return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
  }

  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "SUPERADMIN") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  if (session.user.id?.toString() === id) {
    return NextResponse.json(
      { message: "You cannot delete your own account" },
      { status: 400 },
    );
  }

  try {
    await userService.deleteUser(numericId);
    return NextResponse.json({ message: "User deleted" });
  } catch (error: any) {
    if (error.code === "P2003") {
      return NextResponse.json(
        {
          message:
            "Cannot delete this user because they have related blog posts",
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Failed to delete user" },
      { status: 500 },
    );
  }
}
