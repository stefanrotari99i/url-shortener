import { Jost } from "next/font/google";
import "./globals.css";

const inter = Jost({ subsets: ["latin"] });

export const metadata = {
    title: "Zipr - URL Shortener",
    description: "A simple URL shortener!",
    tags: ["url", "shortener", "zipr", "zipr.itd", "link", "shorten"],
    robots: "index, follow",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="main"></div>
                <main className="app">{children}</main>
            </body>
        </html>
    );
}
