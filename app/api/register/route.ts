import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Adjust the path as needed
import bcrypt from 'bcrypt'; // Corrected import name
import { ResponseWoModelInterface, UserRegisterCreds, ResponseWModelInterface, ResponseWModel } from "@/lib/interfaces";


export async function POST(req: Request) { 
    try {
        let body;
        try {
            body = await req.json();
        } catch (e) {
            const res: ResponseWoModelInterface = ResponseWoModel("400", "Invalid JSON");
            return NextResponse.json(res, { status: 400 });
        }

        if (!body || !body.email || !body.username || !body.password) {
            const res: ResponseWoModelInterface = ResponseWoModel("400", "Missing required fields");
            return NextResponse.json(res, { status: 400 });
        }

        const { email, username, password }: UserRegisterCreds = body;
        
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            const res: ResponseWoModelInterface = ResponseWoModel("400", "User already exists");
            return NextResponse.json(res, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                username,
                password: hashedPassword
            }
        });

        const res: ResponseWModelInterface = ResponseWModel("200", "User registered successfully", newUser);
        return NextResponse.json(res, { status: 200 });

    } catch (e: any) {
        console.error("Error in user registration:", e); // Log the actual error
        const res: ResponseWoModelInterface = ResponseWoModel("500", "Internal Server Error");
        return NextResponse.json(res, { status: 500 });
    }
}

function ResponseWoModel(arg0: string, arg1: string): ResponseWoModelInterface {
    throw new Error("Function not implemented.");
}

