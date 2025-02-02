import Container from "@src/components/Container";
import Layer from "@src/components/Layer";
import Image from "next/image";


const RecentActivity = () => {
    return (
        <div className="py-20">
            <Layer style={{right: "70%", bottom: "60%"}} />
            <Layer style={{left: "70%", top: "60%"}} />
            <Container className="pointer-events-none py-5 space-y-10">
                <h5 className="text-center leading-none">
                <span
                    className="text-app-green-900 font-playfair font-semibold italic text-4xl text-center leading-none"
                >Hoạt động </span>
                    <span
                        className="font-playfair font-semibold italic text-4xl text-center bg-clip-text bg-gradient-to-r from-app-green-900 via-app-green-500 to-app-green-600 text-transparent leading-none"
                    >
                    gần đây
                </span>
                </h5>
                <div className="grid grid-cols-3 gap-10">
                    <div className="space-y-5">
                        <div className="w-full aspect-square">
                            <Image
                                src="/static/images/hoat-dong-1.png"
                                alt="hoat-dong-1"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full rounded-2xl object-cover"
                            />
                        </div>
                        <h2 className="font-bold text-2xl text-app-green-900">Bánh đậu xanh Yến Nhi thay đổi bao bì mới trẻ
                            trung, bắt kịp xu hướng hiện đại</h2>
                        <p>Bao bì được thiết kế với phong cách tươi mới, bao bì mới không chỉ thu hút ánh nhìn mà còn
                            ...</p>
                        <button className="mx-auto block border border-app-green-500 text-app-green-500 py-3 px-6 rounded-full">
                            Đọc thêm
                        </button>
                    </div>
                    <div className="space-y-5">
                        <div className="w-full aspect-square">
                            <Image
                                src="/static/images/hoat-dong-2.png"
                                alt="hoat-dong-2"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full rounded-2xl object-cover"
                            />
                        </div>
                        <h2 className="font-bold text-2xl text-app-green-900">Bánh đậu xanh Yến Nhi thay đổi bao bì mới trẻ
                            trung, bắt kịp xu hướng hiện đại</h2>
                        <p>Bao bì được thiết kế với phong cách tươi mới, bao bì mới không chỉ thu hút ánh nhìn mà còn
                            ...</p>
                        <button className="mx-auto block bg-app-green-500 text-white py-3 px-6 rounded-full">
                            Đọc thêm
                        </button>
                    </div>
                    <div className="space-y-5">
                        <div className="w-full aspect-square">
                            <Image
                                src="/static/images/hoat-dong-3.png"
                                alt="hoat-dong-3"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full rounded-2xl object-cover"
                            />
                        </div>
                        <h2 className="font-bold text-2xl text-app-green-900">Bánh đậu xanh Yến Nhi thay đổi bao bì mới trẻ
                            trung, bắt kịp xu hướng hiện đại</h2>
                        <p>Bao bì được thiết kế với phong cách tươi mới, bao bì mới không chỉ thu hút ánh nhìn mà còn
                            ...</p>
                        <button className="mx-auto block border border-app-green-500 text-app-green-500 py-3 px-6 rounded-full">
                            Đọc thêm
                        </button>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default RecentActivity;