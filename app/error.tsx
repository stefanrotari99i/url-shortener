"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl text-red-500 font-bold mb-2">
                An error occurred
            </h2>
            <p className="text-gray-500 mb-4">
                Something went wrong while rendering this page. Please try again
                later.
            </p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="bg-transparent text-red-500 font-semibold hover:text-red-600 py-2 px-4 border border-red-500 hover:border-red-600 rounded"
            >
                Try again
            </button>
        </div>
    );
}
