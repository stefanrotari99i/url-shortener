import getData from "@/firebase/firestore/getData";
import updateData from "@/firebase/firestore/updateData";
import { increment } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    {
        params,
    }: {
        params: { slug: string };
    }
) {

    const {result, error} = await getData("urls", params.slug);
    const shortUrl = result?.data();

    if (shortUrl) {
        try {
            await updateData("urls", params.slug, { clicks: increment(1) });
            return NextResponse.redirect(shortUrl?.longUrl);
        } catch (error: any) {
            return NextResponse.json({ error: error.message });
        }
    } else {
        return NextResponse.redirect("/");
    }
}


