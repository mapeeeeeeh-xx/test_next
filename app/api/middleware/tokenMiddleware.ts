import { NextResponse } from "next/server";
import { verifyToken } from "../lib/jwt";
import { waitForDebugger } from "inspector";
import { workerData } from "worker_threads";
import { DEV_MIDDLEWARE_MANIFEST } from "next/dist/shared/lib/constants";

export async function protectedRoute(req: Request) {
  try {
    const authorizationHeader = req.headers.get("Authorization");

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { status: "401", message: "Unauthorized: No token provided" },
        { status: 401 }
      );
    }

    const token = authorizationHeader.split(" ")[1];

    // Verify token
    const decoded = verifyToken(token);

    console.log(decoded);

    // Token is valid, proceed to the route handler (continue logic)
    // Attach user info (decoded) to the request if needed
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json(
      { status: "401", message: "Unauthorized: Invalid token" },
      { status: 401 }
    );
  }
}
