import Url from "@/model/urlModel";
import dbConnect from "@/mongoose/connectDB";

export const revalidate  = 3600;

async function getData() {
    await dbConnect();
    const data = await Url.find({}).sort({ createdAt: -1 }).limit(9);
    console.log(data);
    if (!data) {
        throw new Error("No data found");
    }

    return data;
}

export default getData;