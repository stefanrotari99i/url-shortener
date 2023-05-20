import ShortenItem from "@/components/ShortenItem";
import Shortener from "@/components/Shortener";
import getAllCollection from "@/firebase/firestore/getAllColletction";
import { Suspense } from "react";


async function getData() {
    const response = await getAllCollection("urls");
    return response;
}

export default async function Home() {

    const data = await getData();

    return (
        <main className="flex min-h-screen flex-col items-center py-20">
            <h1 className="text-6xl font-bold mb-4 w-full text-center">
                Shorten your{" "}
                <span className="text-gradient-violet">loooong</span> URLs
                <br /> like never before!
            </h1>
            <h2 className="text-lg text-gray-300 mb-12 w-full text-center ">
                Just paste your URL below and click on the button to get a
                shortened URL!
            </h2>
            <Shortener />
            <div className="shorten-items-wrapper">
              <Suspense fallback={<div>Loading...</div>}>
                {data?.result?.map((item: any) => (
                    <ShortenItem
                        key={item.id}
                        item={item}
                    />
                ))}
              </Suspense>
            </div>
        </main>
    );
}
