"use server"
import { validateUrl } from "@/utils/validateUrl";
import { revalidatePath } from "next/cache";

export async function shortItem(formData: FormData) {
    let longUrl = formData.get("url") as string;

    console.log(longUrl);

    if (!validateUrl(longUrl)) {
        throw new Error("Please enter a valid URL");
    }

    await fetch("http://localhost:3000/api/url/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            longUrl: longUrl,
        }),
    });

    revalidatePath("http://localhost:3000/");
}