import dbConnect from "@/mongoose/connectDB";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import Url from "@/model/urlModel";

export async function POST(request: Request) {
    const { longUrl } = await request.json();
    const shortUrl = nanoid(6);

    try {
        await dbConnect();

        const url = new Url({
            longUrl,
            shortUrl,
        });

        await url.save();

        return NextResponse.json({ url });
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}
