import ShortenItem from "@/components/ShortenItem";
import Shortener from "@/components/Shortener";
import Url from "@/model/urlModel";
import dbConnect from "@/mongoose/connectDB";

async function getData() {
  await dbConnect();

  const data = await Url.find({}).sort({ createdAt: -1 }).limit(9);

  return data;
}

export default async function Home() {
  const data = await getData();


  return (
    <main className="flex min-h-screen flex-col items-center py-20">
      <h1 className="text-6xl font-bold mb-4 w-full text-center">
        Shorten your <span className="text-gradient-violet">loooong</span> URLs<br /> like never before!
      </h1>
      <h2 className="text-lg text-gray-300 mb-12 w-full text-center ">
        Just paste your URL below and click on the button to get a shortened URL!
      </h2>
      <Shortener />
      <div className="shorten-items-wrapper">
        {data.map((item) => (
          <ShortenItem key={item._id} item={item} />
        ))}
      </div>
    </main>
  )
}