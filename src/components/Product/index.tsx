import Image from "next/image";
import React, {FC, HTMLAttributes} from 'react';
import {twMerge} from "tailwind-merge";


export type Product = {
    id: number
    name: string
    price: number | string
    image: string
}

type ProductProps = HTMLAttributes<HTMLDivElement> & {
    product: Product
}

const Product:FC<ProductProps> = ({className, product, ...props}) => {
    return (
        <div
            {...props}
            className={
                twMerge(
                    "w-full overflow-hidden p-5 bg-app-green-200 rounded-3xl space-y-2",
                    className
                )
            }
        >
            <div className="w-full aspect-square rounded-2xl overflow-hidden">
                <Image
                    width={0}
                    height={0}
                    src={product.image ?? "/static/images/404-image-placeholder.jpg"}
                    alt="/images/404-image-placeholder.jpg"
                    sizes="100vw"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="space-y-1">
                <h2 className="text-xl leading-none font-medium hover:text-app-green-500 cursor-pointer">{product.name}</h2>
                <p className="text-xl leading-none font-medium text-red-500">{product.price}</p>
            </div>

        </div>
    );
};

export default Product;