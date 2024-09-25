// pages/api/fetchAllUsers/route.ts

import { NextResponse } from "next/server";
import prisma from "@/app/api/lib/prisma"; // Adjust the path as needed

export async function GET() {
  try {
    const users = await prisma.user.findMany(); // Fetch all users

    return NextResponse.json({
      retcode: "200",
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { retcode: "500", message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
///////
