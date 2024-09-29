import Container from "@src/components/Container";
import Image from "next/image";
import React from 'react';

const Story = () => {
    return (
        <Container className='space-y-10'>
            <h2 className="font-playfair font-semibold text-app-green-900 text-4xl italic">Câu chuyện sản phẩm</h2>

            <div className='space-y-40 pb-20'>
                <div className="w-full flex h-484px">
                    <div className="h-full relative z-0 aspect-square">
                        <Image
                            src="/static/images/banh-dau-xanh-2.png"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-full object-cover rounded-3xl"
                        />

                    </div>
                    <div className="grow relative z-10">
                        <div
                            style={{width: "calc(100% + 80px"}}
                            className="h-full w-full flex items-center justify-center bg-app-spring rounded-3xl translate-y-20 -translate-x-20"
                        >
                            <p className="text-xl text-app-green-900">
                                Bánh đậu xanh là một đặc sản trứ danh của vùng đất <br/>
                                Duy Xuyên - Quảng Nam, nổi tiếng với hương vị thơm ngon,<br/>
                                đậm đà. Sản phẩm được làm từ những hạt đậu xanh nguyên<br/>
                                chất bởi chính người nông dân địa phương trồng trọt, kết<br/>
                                hợp với gạo nếp và đường, tạo nên một món bánh ngọt<br/>
                                giòn tan, mềm mịn, bùi bùi vị đậu xanh. Được chế biến giữa sự kết hợp giữa<br/>
                                hiện đại và thủ công, bánh đậu xanh Yến Nhi<br/>
                                vẫn giữ nguyên hương vị truyền thống, không sử dụng chất <br/>
                                bảo quản, mang đến sự an tâm cho người tiêu dùng.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex h-484px">
                    <div className="grow relative z-10">
                        <div
                            className="h-full w-full flex items-center justify-center bg-app-spring rounded-3xl"
                        >
                            <p className="text-xl text-app-green-900">
                                Bánh đậu xanh chứa đựng sự tỉ mỉ trong từng khâu sản xuất.<br/>
                                Từ việc chọn lọc nguyên liệu cho đến quá trình nướng bánh,<br/>
                                tất cả đều được thực hiện với sự chăm chút và kinh nghiệm<br/>
                                của những người thợ lành nghề. Chiếc giòn rụm kết hợp với<br/>
                                thơm ngọt mang lại trải nghiệm ẩm thực khó quên cho<br/>
                                người thưởng thức.<br/>
                            </p>
                        </div>
                    </div>

                    <div className="h-484px w-484px relative z-0 aspect-square">
                        <div style={{width: 564, height: 484}}>
                            <Image
                                src="/static/images/banh-dau-xanh-5.jpg"
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full translate-y-20 -translate-x-20 object-cover rounded-3xl"
                            />
                        </div>

                    </div>

                </div>

                <div className="w-full flex h-484px">
                    <div className="h-full relative z-0 aspect-square">
                        <Image
                            src="/static/images/banh-dau-xanh-4.png"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-full object-cover rounded-3xl"
                        />

                    </div>
                    <div className="grow relative z-10">
                        <div
                            style={{width: "calc(100% + 80px"}}
                            className="h-full w-full flex items-center justify-center bg-app-spring rounded-3xl translate-y-20 -translate-x-20"
                        >
                            <p className="text-xl text-app-green-900">
                                Bên cạnh là một món ăn ngon mà còn mang lại nhiều lợi ích<br/>
                                dinh dưỡng. Với nguồn nguyên liệu tự nhiên từ địa phương,<br/>
                                giàu chất xơ và vitamin từ đậu xanh, sản phẩm giúp cung<br/>
                                cấp năng lượng lành mạnh, phù hợp để thưởng thức trong<br/>
                                những buổi trà chiều hoặc làm quà biếu trong các dịp lễ tết.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex h-484px">
                    <div className="grow relative z-10">
                        <div
                            className="h-full w-full flex items-center justify-center bg-app-spring rounded-3xl"
                        >
                            <p className="text-xl text-app-green-900">
                                Với sự cam kết về chất lượng và an toàn thực phẩm, bánh<br/>
                                đậu xanh Yến Nhi là lựa chọn hoàn hảo cho những khách<br/>
                                hàng yêu thích ẩm thực truyền thống, quan tâm đến sức<br/>
                                khỏe, và cả những người xa quê hương muốn tìm lại hương<br/>
                                vị quen thuộc.
                            </p>
                        </div>
                    </div>

                    <div className="h-484px w-484px relative z-0 aspect-square">
                        <div style={{width: 564, height: 484}}>
                            <Image
                                src="/static/images/banh-dau-xanh-6.jpg"
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full translate-y-20 -translate-x-20 object-cover rounded-3xl"
                            />
                        </div>

                    </div>

                </div>
            </div>


        </Container>
    );
};

export default Story;