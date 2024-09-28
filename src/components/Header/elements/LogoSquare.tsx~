import Link, {LinkProps} from "next/link";
import React, {FC} from 'react';
import {twMerge} from "tailwind-merge";
import Image from "next/image";

type LogoProps = Omit<LinkProps, "href"> & {
    href?: URL
    className?: string
}

const Logo: FC<LogoProps> = ({href = "/", className, ...props}) => {
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
                src="/logo/logo.png"
                alt="logo"
            />
        </Link>
    );
};

export default Logo;