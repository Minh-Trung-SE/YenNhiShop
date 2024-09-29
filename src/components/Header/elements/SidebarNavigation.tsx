"use client"
import Logo, {LogoSquare} from "@src/components/Logo";
import Container from "@src/components/Container";
import {usePathname} from "next/navigation";
import useBoolean from "@src/hooks/useBoolean";
import Link from "next/link";

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

const SidebarNavigation = () => {
    const [flag, setFlag] = useBoolean(false)
    const pathname = usePathname()

    return (
        <Container className="py-2.5">
            <div className="h-11 flex justify-between items-center text-cetacean-blue">
                <div className="h-full flex items-center gap-x-5">
                    <button
                        onClick={setFlag.on}
                    >
                        <svg className="size-8" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <LogoSquare className="h-16 sm:hidden"/>
                    <Logo className="hidden sm:block"/>
                </div>
                <Link
                    href="/lien-he"
                    className="bg-app-green-500 text-white rounded px-4 py-2"
                >
                    Liên hệ
                </Link>
            </div>
            {
                flag ? (
                    <div
                        onClick={setFlag.off}
                        className="fixed inset-0 bg-black/40">
                    </div>
                ) : null
            }
            {
                flag ? (
                    <nav
                        className="flex flex-col max-w-96 w-screen fixed bg-white top-0 left-0 bottom-0 h-full font-medium"
                    >
                        <div className="flex items-center justify-between px-5 py-2 mb-3">
                            <Logo/>
                            <button
                                onClick={setFlag.off}
                                className="transition-all hover:text-vn-red"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>

                        <div className="grow">
                            {
                                LINKS.map(
                                    (link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            onClick={setFlag.off}
                                            className="border-t border-b px-5 py-2 flex items-center text-app-white-900 data-link-active:text-app-green-500 hover:bg-app-white-600 hover:border-app-white-600 transition-colors duration-300"

                                            data-link-active={link.exact ? pathname === link.href : pathname.startsWith(link.href)}
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                )
                            }
                        </div>
                        <div className="bg-app-green-900 p-2">
                            <p className="text-center text-sm font-medium text-white opacity-80">©2024 Banh Đậu Xanh Yến
                                Nhi. All Rights Reserved.</p>
                        </div>
                    </nav>
                ) : null
            }
        </Container>
    )
};

export default SidebarNavigation;