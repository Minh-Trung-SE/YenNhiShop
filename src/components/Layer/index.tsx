"use client";
import {isNull} from "lodash";
import dynamic from "next/dynamic";
import Image from "next/image";
import {FC, HTMLAttributes, useEffect, useRef} from "react";

const Layer:FC<HTMLAttributes<HTMLImageElement>> = ({className, ...props}) => {
    const container = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (isNull(container.current)){
            return
        }

        const parent = container.current.parentElement
        if (isNull(parent)){
            return
        }

        const computedStyle = window.getComputedStyle(parent)
        if (computedStyle.position === "static"){
            parent.style.position = "relative"
        }

        container.current.style.setProperty("height", `${parent.offsetHeight}px`)
        container.current.style.setProperty("width", `${parent.offsetWidth}px`)

        const onResize = () => {
            const parent = container.current!.parentElement
            if (isNull(parent)){
                return
            }
            container.current!.style.setProperty("height", `${parent.offsetHeight}px`)
            container.current!.style.setProperty("width", `${parent.offsetWidth}px`)
        }
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize);
    }, [])

    return (
        <div
            ref={container}
            className="absolute -z-50 top-0 left-0 overflow-hidden"
            style={{width: 0, height: 0 }}
        >
            <div className="relative h-full w-full">
                <Image
                    alt="layer"
                    src="/static/images/layer.svg"
                    {...props}
                    sizes="100vw"
                    height={0}
                    width={0}
                    className={className ?? "absolute w-auto h-auto"}
                />
            </div>
        </div>
    );
};

export default dynamic(
    () => Promise.resolve(Layer),
    {
        ssr: false,
    }
);