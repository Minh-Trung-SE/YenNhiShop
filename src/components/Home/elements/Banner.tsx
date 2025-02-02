import Container from "@src/components/Container";
import Image from "next/image";
import React from 'react';

const Banner = () => {
    return (
        <>
            <div
                className="text-white text-center py-5"
                style={{
                    backgroundImage: "url(/static/images/home-banner-background.png)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    aspectRatio: "16/9",
                    width: "100%",
                    maxHeight: 532
                }}
            >
                <Container className="py-5 relative">
                    <Image
                        alt="banh-dau-xanh-text"
                        src="/static/images/home-banh-dau-xanh-text.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-16 w-auto"
                    />
                    <div className="mt-5 space-y-2">
                        <h1 className="text-left text-green-900 font-black text-3xl font-playfair">
                            HƯƠNG VỊ NGỌT NGÀO TỪ
                            <span className="font-playfair text-app-green-500"> ĐẤT QUẢNG</span>
                        </h1>
                        <p className="w-96 text-app-white-900 text-left">
                            Bánh đậu xanh Yến Nhi là một đặc sản trứ danh của vùng đất Duy Xuyên - Quảng Nam, nổi tiếng
                            với
                            hương vị thơm ngon, đậm đà. Sản phẩm được làm từ những hạt đậu xanh nguyên chất, kết hợp với
                            gạo nếp
                            và đường, tạo nên một món bánh ngọt giòn tan, mềm mịn, bùi bùi vị đậu xanh.
                        </p>
                    </div>


                    <div className="mt-20 flex justify-start">
                        <button className="bg-app-green-500 text-white py-3 px-6 rounded-full">
                            Mua ngay
                        </button>
                        <button className="text-app-green-500 underline py-3 px-6 rounded-full">
                            Khám phá ngay
                        </button>
                    </div>


                    <div className="mt-4 gap-y-2 flex flex-col justify-start">
                        <button className="w-fit border border-black text-black py-3 px-6 rounded-full">
                            Duy Thành, Duy Xuyên, Quảng Nam
                        </button>
                        <button className="w-fit border border-black text-black py-3 px-6 rounded-full">
                            0377 398 046 - 0903 533 032
                        </button>
                    </div>

                    <Image
                        alt="banh-dau-xanh"
                        src="/static/images/home-banner-banh-dau-xanh.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="top-0 right-0 absolute w-2/3 h-full object-contain"
                    />

                </Container>
            </div>
            <Container className="pointer-events-none py-5">
                <Image
                    src="/static/images/home-gia-tri-cot-loi.png"
                    alt="gia-tri-cot-loi"
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-full h-auto"
                />
            </Container>

        </>
    );
};

export default Banner;