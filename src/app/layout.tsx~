import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@src/app/globals.css";
import {Toaster} from 'sonner';
import {ReactNode} from "react";
import Header from "@src/components/Header";
import Footer from "@src/components/Footer";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Bánh đậu xanh Yến Nhi",
    description: "Bánh đậu xanh Yến Nhi là một đặc sản trứ danh của vùng đất Duy Xuyên - Quảng Nam, nổi tiếng với hương vị thơm ngon, đậm đà. Sản phẩm được làm từ những hạt đậu xanh nguyên chất, kết hợp với gạo nếp và đường, tạo nên một món bánh ngọt giòn tan, mềm mịn, bùi bùi vị đậu xanh.",
    keywords: ["Yến Nhi", "Bánh đậu xanh"],
    icons: "/static/logo.png",
    openGraph: {
        title: "Bánh đậu xanh Yến Nhi",
        description: "Bánh đậu xanh Yến Nhi là một đặc sản trứ danh của vùng đất Duy Xuyên - Quảng Nam, nổi tiếng với hương vị thơm ngon, đậm đà. Sản phẩm được làm từ những hạt đậu xanh nguyên chất, kết hợp với gạo nếp và đường, tạo nên một món bánh ngọt giòn tan, mềm mịn, bùi bùi vị đậu xanh.",
        url: process.env.URL,
        type: "website",
        images: `${process.env.URL}/static/logo.png`
    }
}

export default function RootLayout(
    {
        children,
    }: {
        children: ReactNode
    }
) {

    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        <Toaster/>
        </body>
        </html>
    );
}
