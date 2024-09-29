import Image from "next/image";
import Link from "next/link";
import React from 'react';

const BackLinks = () => {
    return (
        <div className="fixed space-y-2 z-20 bottom-5 right-5">

            <Link
                href="https://shopee.vn/thuthuledt"
                target="_blank"
                className="block"
            >
                <Image
                    src="/static/icons/shopee.svg"
                    alt="Yến Nhi Shoppe"
                    width={40}
                    height={40}
                />
            </Link>
            <Link
                href="https://www.facebook.com/profile.php?id=100054534306096&locale=vi_VN"
                target="_blank"
                className="block"
            >
                <Image
                    src="/static/icons/facebook.svg"
                    alt="Yến Nhi Shoppe"
                    width={40}
                    height={40}
                />
            </Link>

        </div>
    );
};

export default BackLinks;