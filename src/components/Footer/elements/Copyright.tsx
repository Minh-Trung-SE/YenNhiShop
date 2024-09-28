import React, {FC, HTMLAttributes} from 'react';
import {twMerge} from "tailwind-merge";

const Copyright: FC<HTMLAttributes<HTMLDivElement>> = ({className, ...props}) => {
    return (
        <div
            className={twMerge("border-t border-gray-500 py-2", className)}
            {...props}
        >
            <p className="text-center text-sm font-medium text-white opacity-80">©2024 Vanuatu Passport, Vanuatu Citizenship by Investment - Vanuatu Investment Marketing Bureau. All Rights Reserved.</p>
        </div>
    );
};

export default Copyright;