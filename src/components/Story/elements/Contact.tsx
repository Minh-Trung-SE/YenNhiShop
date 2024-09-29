import Container from "@src/components/Container";


const Certificate = () => {
    return (
        <Container className="space-y-10 py-20">
            <h2 className="font-playfair font-semibold text-app-green-900 text-4xl italic">Hãy ghé thăm chúng tôi nhé!</h2>

            <div className='flex justify-between gap-x-5'>
                <div
                    style={
                        {
                            width: 480,
                            height: 458
                        }
                    }
                    className="flex-none bg-app-spring rounded-3xl"
                >

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7677.048209360734!2d108.301332!3d15.829028!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDQ5JzQ0LjUiTiAxMDjCsDE4JzE0LjEiRQ!5e0!3m2!1svi!2s!4v1727585217869!5m2!1svi!2s"
                        className="w-full h-full rounded-3xl border-none"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>

                <div
                    className="grow h-full w-full flex flex-col px-10 justify-center bg-app-spring rounded-3xl"
                    style={
                        {
                            height: 458
                        }
                    }
                >
                    <h2 className="text-app-green-900 text-3xl font-playfair font-black">Yến Nhi</h2>
                    <p className="py-5 text-app-green-900 font-bold">Khám Phá Hương Vị Bánh Đậu Xanh Tại Yến Nhi</p>
                    <p className="text-app-green-900 py-2">
                        Tại Yến Nhi, câu chuyện của chúng tôi bắt đầu từ tình yêu quê hương với những chiếc bánh đậu
                        xanh
                        tuyệt vời. Sứ mệnh của chúng tôi là phục vụ những chiếc bánh đậu xanh ngon miệng, chất lượng
                        cao,
                        được làm từ nguyên liệu tươi ngon, được chọn lọc từ địa phương.
                    </p>
                    <p className="text-app-green-900 py-2">
                        Hãy tham gia cùng chúng tôi tại Yến Nhi và cảm nhận sự khác biệt mà đam mê và chất lượng mang
                        lại.
                    </p>
                    <p className="text-app-green-900 font-semibold py-2">Tìm chúng tôi tại:</p>
                    <p className="text-app-green-900 py-2">Cơ sở sản xuất Bánh Yến Nhi <br/>Thôn Vân Quật, Duy Thành,
                        Duy Xuyên, Quảng Nam</p>
                </div>
            </div>

        </Container>
    );
};

export default Certificate