"use client";
import { FiExternalLink } from "react-icons/fi";
import { HiCursorClick } from "react-icons/hi";
import { BiCopy } from "react-icons/bi";
import { timeAgo } from "@/utils/timeAgo";
import { useEffect, useState } from "react";
interface ShortenItemProps {
    item: any;
}

const ShortenItem = ({ item }: ShortenItemProps) => {
    const [location, setLocation] = useState("");

    const copyToClipboard = () => {
        navigator.clipboard.writeText(`${location}/r/${item.shortUrl}`);
    };

    useEffect(() => {
        setLocation(window.location.origin);
    }, []);

    return (
        <article className="overflow-hidden rounded-xl p-6 w-full bg-[#0d0d0d]/80 backdrop-blur-md hover:bg-[#0d0d0d]/100 transition duration-300">
            <div className="flex flex-col items-start gap">
                <a
                    href={item.longUrl}
                    className="text-neutral-300 text-sm line-clamp-1 break-all"
                >
                    {item.longUrl}
                </a>
                <div className="flex items-center gap-3">
                    <a
                        href={`${location}/r/${item.shortUrl}`}
                        className="text-white font-bold text-md"
                        target="_blank"
                    >
                        {`${location}/r/${item.shortUrl}`}
                    </a>
                    <a
                        href={`${location}/r/${item.shortUrl}`}
                        target="_blank"
                        className="bg-violet-500/10 h-8 w-8 flex items-center justify-center rounded-xl"
                    >
                        <FiExternalLink className="text-violet-500 text-sm" />
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-between gap-4 mt-4 border-t border-neutral-900 pt-4">
                <div className="flex items-center gap-2">
                    <HiCursorClick className="text-gray-400 text-sm" />
                    <p className="text-gray-400 font-semibold text-xs">
                        {item.clicks} clicks
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-gray-400 font-semibold text-xs">
                        {timeAgo(item.createdAt)}
                    </p>
                </div>
                <button className="bg-transparent text-violet-500 hover:text-violet-700 focus:outline-none active:scale-105" onClick={copyToClipboard}>
                    <BiCopy className="text-lg" />
                </button>
            </div>
        </article>
    );
};

export default ShortenItem;
