import dbConnect from "@/mongoose/connectDB";
import { NextResponse } from "next/server";
import Url from "@/model/urlModel";

export async function GET(
    request: Request,
    {
        params,
    }: {
        params: { slug: string };
    }
) {
    await dbConnect();
    const shortUrl = await Url.findOne({ shortUrl: params.slug });

    if (shortUrl) {
        try {
            shortUrl.clicks++;
            await shortUrl.save();
            return NextResponse.redirect(shortUrl.longUrl);
        } catch (error: any) {
            return NextResponse.json({ error: error.message });
        }
    } else {
        return NextResponse.redirect("/");
    }
}


