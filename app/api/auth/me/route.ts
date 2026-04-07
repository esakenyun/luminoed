import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({ id: session.user.id, role: session.user.role });
  } catch (error) {
    return NextResponse.json({ message: "Invalid session" }, { status: 401 });
  }
}
