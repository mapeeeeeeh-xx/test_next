import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import prisma from "@/lib/prisma";
import { ResponseWModel, ResponseWoModel } from "@/lib/interfaces";


export async function POST(req: Request) { 
    try {
        const body = await req.json();

        // Validate that the identifier and password fields are present
        if (!body || !body.identifier || !body.password) {
            return NextResponse.json(ResponseWoModel('400', 'Missing identifier or password field'), { status: 400 });
        }

        // Check if identifier is an email or username and query accordingly
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: body.identifier },
                    { username: body.identifier } // Assuming you have a username field
                ]
            }
        });

        if (!user) {
            return NextResponse.json(ResponseWoModel('404', 'User not found'), { status: 404 });
        }

        // Validate the password
        const validPassword = await bcrypt.compare(body.password, user.password);
        if (!validPassword) {
            return NextResponse.json(ResponseWoModel('401', 'Invalid password'), { status: 401 });
        }

        return NextResponse.json(ResponseWModel('200', 'User logged in', user), { status: 200 });
    } catch (error) {
        console.error('Error handling request:', error);
        return NextResponse.json(ResponseWoModel('500', 'Internal Server Error'), { status: 500 });
    }
}


