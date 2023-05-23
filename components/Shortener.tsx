"use client";
import { validateUrl } from "@/utils/validateUrl";
import { useState, useTransition } from "react";
import { BiCopy, BiShareAlt } from "react-icons/bi";
import Button from "./Button";
import Input from "./Input";

const Shortener = ({ action }: { action: any }) => {
    let [url, setUrl] = useState("");
    let [isLoading, setIsLoading] = useState(false);
    let [result, setResult] = useState("") as any;
    let [error, setError] = useState("") as any;
    let [isPending, startTransition] = useTransition();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(`${window.location.origin}/r/${result}`);
    };

    const resetForm = () => {
        setUrl("");
        setResult("");
        setError("");
        setIsLoading(false);
    };

    const shareUrl = () => {
        navigator.share({
            title: "Shorten URL",
            text: "Check out this URL",
            url: `${window.location.origin}/${result}`,
        });
    };

    const onSubmit = async (e: any) => {
        e.preventDefault();

        if (!validateUrl(url)) {
            setError("Please enter a valid URL");
            return;
        }

        setIsLoading(true);

        startTransition(() => {
            action(url).then((res: any) => {
                setResult(res);
                setIsLoading(false);
            });
        });
    };

    return (
        <form
            onSubmit={(e) => onSubmit(e)}
            className="flex items-center gap-4 w-full relative flex-col md:flex-row"
        >
            {error && (
                <p className="text-red-500 text-md font-semibold absolute -top-8 pointer-events-none">
                    {error}
                </p>
            )}
            {result ? (
                <div
                    className="bg-transparent backdrop-blur-lg h-12 cursor-pointer text-violet-100 font-medium text-md py-2 px-4 rounded-2xl ring-2 ring-violet-500 focus:outline-none focus:text-neutral-100  focus:ring-violet-600 focus:border-transparent  flex-1 flex items-center"
                    onClick={copyToClipboard}
                >
                    <span className="flex-1">
                        {window.location.origin}/r/{result}
                    </span>
                    <button
                        type="button"
                        className="bg-transparent text-violet-500 hover:text-violet-700 focus:outline-none active:scale-105"
                    >
                        <BiCopy className="text-xl" onClick={copyToClipboard} />
                    </button>
                    <button
                        type="button"
                        className="ml-4 bg-transparent text-violet-500 hover:text-violet-700 focus:outline-none active:scale-105"
                        onClick={shareUrl}
                    >
                        <BiShareAlt className="text-xl" />
                    </button>
                </div>
            ) : (
                <Input
                    value={url}
                    palceholder="Paste your URL here"
                    name="url"
                    className="flex-1"
                    disabled={isLoading}
                    onChange={(e) => {
                        setUrl(e.target.value);
                        setError("");
                    }}
                    error={error}
                />
            )}
            {result ? (
                <button
                    type="button"
                    className="cursor-pointer h-12 bg-transaprent hover:text-violet-500 text-white text-md py-2 px-4 rounded-2xl ring-2 ring-violet-500 focus:outline-none focus:text-neutral-100  focus:ring-violet-600 focus:border-transparent"
                    onClick={resetForm}
                >
                    Shorten new URL
                </button>
            ) : (
                <Button
                    label="Shorten URL"
                    type="submit"
                    className="h-12"
                    disabled={url.length === 0 || isLoading}
                    isLoading={isLoading}
                />
            )}
        </form>
    );
};

export default Shortener;
