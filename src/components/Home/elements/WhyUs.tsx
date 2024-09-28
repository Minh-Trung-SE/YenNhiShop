import Container from "@src/components/Container";
import Image from "next/image";


const WhyUs = () => {
    return (
        <Container className="pointer-events-none py-5 space-y-20">
            <h5 className="text-center leading-none">
                <span
                    className="text-app-green-900 font-playfair font-semibold italic text-4xl text-center leading-none"
                >Vì sao khách hàng lại chọn </span>
                <span
                    className="font-playfair font-semibold italic text-4xl text-center bg-clip-text bg-gradient-to-r from-app-green-900 via-app-green-500 to-app-green-600 text-transparent leading-none"
                >
                    Bánh đậu xanh Yến Nhi?
                </span>
            </h5>
            <div style={{height: 514}} className="flex gap-x-20">
                <Image
                    src="/static/images/banh-dau-xanh-1.png"
                    alt="banh-dau-xanh"
                    sizes="100vw"
                    height={0}
                    width={446}
                    className="flex-none h-full"
                />
                <div className="h-full flex flex-col grow gap-y-5">
                    <h2 className="font-playfair text-app-green-900 text-2xl font-bold">Khám phá hương vị truyền <br/> thống -  Gói gọn trong từng <br/> chiếc bánh</h2>
                    <p>
                        Nơi mang đến cho bạn trải nghiệm ẩm thực đậm đà hương vị truyền thống Việt Nam. Với nguyên liệu chọn lọc và công thức gia truyền, mỗi chiếc bánh đậu xanh tại Yến Nhi đều là sự kết hợp hoàn hảo giữa độ mềm mại của đậu xanh và vị ngọt thanh nhẹ nhàng. Chúng tôi tự hào mang đến những sản phẩm không chỉ ngon miệng mà còn an toàn cho sức khỏe. Hãy đến và khám phá những hương vị đặc trưng, cùng với sự phục vụ tận tâm từ đội ngũ nhân viên của chúng tôi. Bánh đậu xanh Yến Nhi – nơi gói trọn tình yêu và tâm huyết trong từng miếng bánh!
                    </p>
                    <div className="grow overflow-hidden grid grid-cols-12 grid-rows-2 gap-5">
                        <div className="col-span-4 rounded overflow-hidden">
                            <Image
                                src="/static/images/banh-dau-xanh-2.png"
                                alt="banh-dau-xanh.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="col-span-8 row-span-2 rounded overflow-hidden">
                            <Image
                                src="/static/images/banh-dau-xanh-4.png"
                                alt="banh-dau-xanh.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-red-500 col-span-4 rounded overflow-hidden">
                            <Image
                                src="/static/images/banh-dau-xanh-3.png"
                                alt="banh-dau-xanh.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default WhyUs;