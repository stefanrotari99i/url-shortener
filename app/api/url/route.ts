import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import addData from "@/firebase/firestore/addData";


export async function POST(request: Request) {
    const { longUrl } = await request.json();
    const shortUrl = nanoid(6);

    try {
        const {result, error} = await addData("urls", shortUrl, { 
            longUrl, 
            shortUrl, 
            clicks: 0,
            createdAt: new Date().toISOString(),
        });

        if (error) {
            return NextResponse.json({ error: error.message });
        }
        
        return NextResponse.json({ 
            shortUrl,
            longUrl,
            clicks: 0,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}
