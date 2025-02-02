import Container from "@src/components/Container";
import Link from "next/link";
import React, {FC, HTMLAttributes} from 'react';
import Image from "next/image";
import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";

const Main: FC<HTMLAttributes<HTMLDivElement>> = ({className = "p-5 rounded space-y-10", ...props}) => {
    const language = getServerLanguage()
    return (
        <Container
            className={className}
            {...props}
        >
            <div className="py-10 grid grid-cols-3 gap-y-5">

                <div className="space-y-5">
                    <h2 className="text-2xl font-medium">Đại chỉ</h2>
                    <div className="text-app-white-900">
                        <p className="font-black">Hộ kinh doanh Hồ Thị Yến Nhi</p>
                        <p className="font-light">Thôn Vân Quật, xã Duy Thành, huyện Duy Xuyên, tỉnh Quảng Nam</p>
                        <p className="font-light">yennhidtdxqn@gmail.com</p>
                        <p className="font-light">0377 398 046 - 0903 533 032</p>
                    </div>

                </div>
                <div className="space-y-5">
                    <h2 className="text-2xl font-medium">Thông tin trợ giúp</h2>
                    <div className="text-app-white-900 space-y-1">
                        <p className="font-light">Chính sách thanh toán</p>
                        <p className="font-light">Chính sách kiểm tra hàng</p>
                        <p className="font-light">Chính sách đổi trả</p>
                        <p className="font-light">Chính sách bảo mật</p>
                    </div>

                </div>
                <div className="space-y-5">
                    <h2 className="text-2xl font-medium">Theo dõi tại</h2>
                    <div className="text-app-white-900">
                        <Link href="https://shopee.vn/thuthuledt" target="_blank" className="block font-light hover:text-app-green-500">Shopee</Link>
                        <Link href="https://www.facebook.com/profile.php?id=100054534306096&locale=vi_VN" target="_blank" className="block font-light hover:text-app-green-500">Facebook</Link>

                    </div>

                </div>

            </div>

        </Container>
    );
};

export default Main;