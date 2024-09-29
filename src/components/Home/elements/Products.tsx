"use client";
import Container from "@src/components/Container";
import Layer from "@src/components/Layer";
import Product from "@src/components/Product";
import dynamic from "next/dynamic";
import {useEffect, useRef, useState} from "react";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

const Products = () => {
    const swiper = useRef<SwiperRef>(null)
    const [centerIndex, setCenterIndex] = useState(1)


    useEffect(
        () => {
            swiper.current?.swiper.on(
                "slideChange",
                () => {
                    const index = swiper.current?.swiper.activeIndex ?? 0
                    setCenterIndex(index + 1)
                }
            )
        },
        []
    )
    return (
        <Container className="py-20">

            <Layer className="absolute w-auto h-auto" style={{right: "25%", bottom: "50%"}}/>
            <Layer className="absolute w-auto h-auto" style={{right: "25%", top: "80%"}}/>
            <div className="space-y-10">
                <h5 className="text-center">
                    <span className="text-app-green-900 font-playfair font-black italic text-4xl text-center">Sản phẩm </span>
                    <span className="font-playfair font-black italic text-4xl text-center bg-clip-text bg-gradient-to-r from-app-green-600 via-app-green-500 to-app-green-400 text-transparent"> nổi bật</span>
                </h5>

                <div
                    className="flex items-center gap-x-5 overflow-hidden"
                >
                    <button
                        onClick={
                            () => {
                                swiper.current?.swiper.slidePrev()
                            }
                        }
                        className="p-1.5 border-app-green-700 text-app-green-700 border rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                        </svg>

                    </button>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        ref={swiper}
                        loop={true}
                    >
                        {
                            [
                                {
                                    id: 1,
                                    name: "Bánh trung thu 150 gram",
                                    price: "100.000đ",
                                    image: "/assets/products/product (2).png"
                                },
                                {
                                    id: 2,
                                    name: "Bánh đậu xanh hộp 250 gram",
                                    price: "100.000đ",
                                    image: "/assets/products/product (3).png"
                                },
                                {
                                    id: 3,
                                    name: "Bánh trung thu hộp 2 bánh",
                                    price: "100.000đ",
                                    image: "/assets/products/product (1).png"
                                }
                            ].map(
                                (product, index) => {
                                    return (
                                        <SwiperSlide
                                            key={product.id}
                                            className={centerIndex === index ? "p-1" : "p-6"}
                                        >
                                            <Product className={centerIndex === index ? "bg-white shadow-md" : ""}  product={product}                                            />
                                        </SwiperSlide>
                                    )
                                }
                            )
                        }
                    </Swiper>
                    <button
                        onClick={
                            () => {
                                swiper.current?.swiper.slideNext()
                            }
                        }
                        className="p-1.5 border-app-green-700 text-app-green-700 border rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                        </svg>

                    </button>

                </div>
            </div>


        </Container>
    );
};

export default dynamic(() => Promise.resolve(Products), {ssr: false}) as typeof Products