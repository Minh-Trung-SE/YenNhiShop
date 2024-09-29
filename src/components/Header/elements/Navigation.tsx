"use client"
import Logo from "@src/components/Logo";
import React from 'react';
import Container from "@src/components/Container";
import Link from "next/link";
import {usePathname} from "next/navigation";


const LINKS = [
    {
        name: "Trang chủ",
        href: "/",
        exact: true
    },
    {
        name: "Câu chuyện sản phẩm",
        href: "/cau-chuyen-san-pham",
    },
    {
        name: "Sản phẩm",
        href: "/san-pham",
    },
    {
        name: "Hoạt động",
        href: "/hoat-dong",
    },
    {
        name: "Liên hệ",
        href: "/lien-he",
    }
]

const Navigation = () => {
    const pathname = usePathname()

    return (
        <Container className="hidden md:block py-2.5">
            <div className="h-11 flex justify-between items-center text-cetacean-blue">
                <Logo/>
                <nav className="h-full flex items-center font-medium">

                    {
                        LINKS.map(
                            (link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}

                                    data-link-active={link.exact ? pathname === link.href : pathname.startsWith(link.href)}
                                    className="text-app-white-900 p-2.5 hover:text-app-green-500 data-link-active:text-app-green-500"
                                >
                                    {link.name}
                                </Link>
                            )
                        )
                    }
                </nav>

                <div className="flex space-x-5">
                    <button
                        type="button"
                        className="hover:text-app-green-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 text-app-white-900"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>

                    </button>

                    <button
                        type="button"
                        className="hover:text-app-green-500"
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 text-app-white-900"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </Container>
    )
};

export default Navigation;