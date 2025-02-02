import Image from "next/image";
import Link, {LinkProps} from "next/link";
import React, {FC, HTMLAttributes} from 'react';
import {twMerge} from "tailwind-merge";

type LogoSquareProps = Omit<LinkProps, "href"> & {
    href?: URL
    className?: string
}

export const LogoSquare: FC<LogoSquareProps> = ({href = "/", className, ...props}) => {
    return (
        <Link
            href={href}
            {...props}
            className={twMerge("hover:opacity-90 transition-opacity", className)}
        >
            <Image
                sizes="100vw"
                width={0}
                height={0}
                loading="eager"
                className="h-full w-auto"
                src="/static/logo.png"
                alt="logo"
            />
        </Link>
    );
};

const Logo:FC<Partial<LinkProps> & HTMLAttributes<HTMLAnchorElement>> = ({href = "/", className, ...props}) => {
    return (
        <Link
            href={"/"}
            {...props}
            className={twMerge("font-playfair text-4xl font-black text-green-900", className)}
        >
            Yến Nhi
        </Link>
    );
};

export default Logo;