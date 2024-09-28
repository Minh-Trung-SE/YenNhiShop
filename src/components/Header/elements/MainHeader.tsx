"use client"
import React from 'react';
import useMediaQuery from "@src/hooks/useMediaQuery";
import SidebarNavigation from "@src/components/Header/elements/SidebarNavigation";
import Navigation from "@src/components/Header/elements/Navigation";


const MainHeader = () => {
    const isLargeScreen = useMediaQuery('(min-width: 1280px)');

    return isLargeScreen ? <Navigation/> : <SidebarNavigation/>
};

export default MainHeader;