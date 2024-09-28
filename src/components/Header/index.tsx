"use client"
import Navigation from "@src/components/Header/elements/Navigation";
import SidebarNavigation from "@src/components/Header/elements/SidebarNavigation";
import useMediaQuery from "@src/hooks/useMediaQuery";
import {FC, HTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";


type HeaderProps = HTMLAttributes<HTMLHeadElement>


const Header: FC<HeaderProps> = ({className, ...props}) => {
    const isSmallScreen = useMediaQuery('(max-width: 1280px)');

    return (
        <header
            className={twMerge("border-b sticky top-0 z-10 bg-white", className)}
            {...props}
        >
            {isSmallScreen ? <SidebarNavigation/> : <Navigation/>}
        </header>
    )
}

export default Header