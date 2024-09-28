"use client"
import {isNull} from "lodash";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FC, HTMLAttributes, useEffect} from "react";
import {twMerge} from "tailwind-merge";


const NAVIGATION = [
    {
        name: "Consulting",
        href: "/dashboard",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
            </svg>
        )
    },
    {
        name: "Blogs",
        href: "/dashboard/blog",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
            </svg>
        )
    },
    {
        name: "Blogging",
        href: "/dashboard/blogging",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
            </svg>

        )
    },


]

const Navigation: FC<HTMLAttributes<HTMLHeadElement>> = ({className, ...props}) => {
    const pathname = usePathname()

    useEffect(
        () => {
            const sidebar = document.querySelector("header")
            const aside = document.querySelector("aside")

            if (isNull(sidebar) || isNull(aside)) {
                return
            }

            aside.style.setProperty(
                "min-height",
                `calc(100vh - ${sidebar.offsetHeight}px)`
            )
        },
        []
    )

    return (
        <aside
            className={twMerge("border-r w-60", className)}
            {...props}
        >
            <ul className="p-3 space-y-1.5">
                {
                    NAVIGATION.map(
                        (nav, index) => (
                            <li key={index}>
                                <Link
                                    href={nav.href}
                                    className={
                                        twMerge(
                                            "flex items-center space-x-2 p-2 py-4 px-3 rounded-lg",
                                            pathname === nav.href ? "bg-catskill-white text-cetacean-blue" : "text-pale-sky hover:bg-catskill-white"
                                        )
                                    }
                                >
                                    {nav.icon}
                                    <span className="text-sm leading-4">{nav.name}</span>
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </aside>
    )
}

export default Navigation