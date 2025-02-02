import Container from "@src/components/Container";
import Image from "next/image";
import React from 'react';

const Introduction = () => {
    return (
        <Container className="grid grid-cols-2 gap-5">
            <div className="space-y-20 py-20">
                <div className="space-y-1">
                    <h1 className="font-playfair font-semibold italic text-app-green-900 text-4xl">
                        Bánh đậu xanh
                        <span className="font-playfair font-black not-italic text-yellow-400 ont-semibold text-5xl"> Yến Nhi</span>
                    </h1>

                    <p>Câu chuyện bắt nguồn từ tình yêu quê hương truyền thống</p>
                </div>

                <div className="flex space-x-5">
                    <button className="bg-app-green-700 text-white py-2 px-6 rounded-full">
                        Khám phá ngay
                    </button>
                    <button className="size-10 inline-flex items-center justify-center rounded-full border border-app-green-700 text-green-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>

                    </button>
                </div>
            </div>
            <div className="p-5">
                <div className="w-5/6 aspect-square bg-app-green-200 rounded-3xl relative">
                    <Image
                        src="/static/images/banh-dau-xanh-1.png"
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="absolute top-5 left-5 w-full h-full object-cover rounded-3xl"
                    />

                </div>
            </div>

        </Container>
    );
};

export default Introduction;