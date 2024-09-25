import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/api/lib/prisma";
import { ResponseWModel, ResponseWoModel } from "@/app/api/lib/errorModel";
import { createToken } from "@/app/api/lib/jwt";
import { UserLoginCreds } from "@/app/api/lib/interfaces";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Check if identifier is an email or username and query accordingly
    console.log("Searching for user with identifier:", body.identifier);

    const user = (await prisma.user.findFirst({
      where: {
        OR: [{ email: body.identifier }, { username: body.identifier }],
      },
    })) as UserLoginCreds;

    console.log("Found user:", user);

    // Validate the password
    if (!user) {
      console.log("User not found");
      return NextResponse.json(ResponseWoModel("404", "User not found"), {
        status: 404,
      });
    }

    // Validate the password
    const validPassword = await bcrypt.compare(body.password, user.password);

    if (!validPassword) {
      console.log("Invalid password");
      return NextResponse.json(ResponseWoModel("401", "Invalid password"), {
        status: 401,
      });
    }

    const token = createToken(user.id);

    return NextResponse.json(
      ResponseWModel("200", "User logged in", { user, token }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json(ResponseWoModel("500", "Internal Server Error"), {
      status: 500,
    });
  }
}
