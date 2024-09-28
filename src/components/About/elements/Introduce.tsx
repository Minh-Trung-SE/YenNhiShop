import React from 'react';
import getServerLanguage from "@src/ultils/getServerLanguage";
import Image from "next/image";
import displayMessage from "@src/ultils/language";

const Introduce = () => {
    const language = getServerLanguage()
    return (
        <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">

                <div className="w-full text-lg">
                    <Image
                        className="block w-8/12 mx-auto"
                        width={0}
                        height={0}
                        sizes="100vw"
                        src="/logo/original.png"
                        alt="VIMB Viet Nam"
                    />
                    <p>
                        {
                            displayMessage(
                                {
                                    en: "Only agents authorised by the Vanuatu Citizenship Commission can process applications for either the DSP or CIIP programs to obtain Vanuatu citizenship.",
                                    vi: "Chỉ những đại lý được Ủy ban Nhập tịch Vanuatu ủy quyền mới có thể xử lý đơn xin cấp quốc tịch Vanuatu theo chương trình DSP hoặc CIIP."
                                },
                                language
                            )
                        }
                    </p>
                    <br/>
                    <p>
                        {
                            displayMessage(
                                {
                                    en: "If you are dealing with an office to obtain Vanuatu citizenship, please ask to see their credentials and WHO they are submitting your application through.",
                                    vi: "Nếu bạn đang làm việc với một văn phòng để xin quốc tịch Vanuatu, vui lòng yêu cầu xem thông tin xác thực của họ và cách họ gửi đơn xin của bạn thông qua ai."
                                },
                                language
                            )
                        }
                    </p>
                    <br/>
                    <p>
                        {
                            displayMessage(
                                {
                                    en: "If they have been verified, their business details and authorisation code will be listed on our website.",
                                    vi: "Nếu họ đã được xác minh, thông tin chi tiết về doanh nghiệp và mã ủy quyền của họ sẽ được liệt kê trên trang web của chúng tôi."
                                },
                                language
                            )
                        }
                    </p>
                </div>
                <Image
                    className="block w-full object-cover"
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/images/volcano.jpg"
                    alt="VIMB-Vanuatu-Citizenship"
                />

            </div>

            <div className="flex flex-wrap-reverse sm:flex-nowrap">
                <Image
                    className="block w-full sm:w-3/5"
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/background/VIMB-About-US.jpg"
                    alt="VIMB-Vanuatu-Citizenship"
                />


                <div className="grow flex flex-col p-5 items-center justify-center text-lg bg-primary">
                    <p className="text-white">
                        {
                            displayMessage(
                                {
                                    vi: "VIMB kể từ năm 2017 đã là một trong những công ty dịch vụ chuyên nghiệp hoạt động quốc tế nổi bật nhất của Vanuatu. Có trụ sở chính tại Vanuatu, VIMB hoạt động tại Port Vila, Singapore, Dubai, London và bây giờ là Việt Nam.",
                                    en: "VIMB has since 2017 been one of Vanuatu’s most prominent internationally operating professional services companies. Headquartered in Vanuatu, VIMB operates in Port Vila, Singapore, Dubai, London and now Vietnam."
                                },
                                language
                            )
                        }
                    </p>
                    <br/>
                    <p className="text-white">
                        {
                            displayMessage(
                                {
                                    vi: "Văn phòng Quốc tịch Vanuatu đã chỉ định VIMB làm đại lý cho chương trình Quốc tịch theo diện Đầu tư (CBI) của Vanuatu. Hiện chúng tôi đã mở rộng sang châu Á để đảm bảo nguồn vốn đầu tư nước ngoài thông qua chương trình CBI.",
                                    en: "The Vanuatu Citizenship Office has designated VIMB as their agent for Vanuatu’s Citizenship By Investment (CBI) program. We have now expanded to Asia to secure foreign investment funding via its CBI program."
                                },
                                language
                            )
                        }
                    </p>
                </div>

            </div>

            <div className="grid grid-cols-5 gap-5">
                <div className="flex flex-col items-center justify-center col-span-5 sm:col-span-3 text-lg">
                    <p>
                        {
                            displayMessage(
                                {
                                    en: "VIMB was a key supporting member of Vanuatu’s highly successful participation in Dubai Expo 2020 and, is now closely involved in Vanuatu’s climate change agenda. Through its international network and engagement with government, NGOs and the private sector, VIMB now leads Vanuatu’s efforts to secure international climate finance to transform the country into a regional sustainable development hub for the South Pacific.",
                                    vi: "Vanuatu đã cam kết thực hiện Chiến lược phát triển phát thải thấp (LEDS) dài hạn theo Công ước của Liên hợp quốc về biến đổi khí hậu (UNFCCC), phù hợp với Thỏa thuận Paris nhằm hạn chế tình trạng nóng lên toàn cầu. Vanuatu đã chỉ định nhiều con đường để giảm phát thải trong mọi lĩnh vực và mở rộng khả năng thích ứng và phục hồi khí hậu đến năm 2050."
                                },
                                language
                            )
                        }
                    </p>
                    <br/>
                    <p>
                        {
                            displayMessage(
                                {
                                    en: "Vanuatu has committed to a long term Low Emissions Development Strategy (LEDS) to the United Nations Framework Convention on Climate Change (UNFCCC), in line with the Paris Agreement to limit global warming. Vanuatu has designated many pathways to lower emissions across all sectors and expanded climate adaptation and resilience to 2050.",
                                    vi: "Chương trình Đầu tư nhập tịch (CBI) của Vanuatu có tên là Capital Investment Immigration Plan (CIIP). Nguồn vốn nước ngoài huy động thông qua chương trình này nhằm mục đích nâng cao ngành nhiên liệu sinh học của Vanuatu để đạt mục tiêu không phát thải carbon vào năm 2030. Cơ hội này cho phép tầng lớp trung lưu, thượng lưu của Việt Nam mở rộng phạm vi đi lại và kinh doanh trên thế giới với ít rắc rối hơn thông qua hộ chiếu Vanuatu, mà không cần nghĩa vụ hoặc trách nhiệm công dân."
                                },
                                language
                            )
                        }
                    </p>
                    <br/>
                    <p>
                        {
                            displayMessage(
                                {
                                    en: "Vanuatu’s Citizenship By Investment (CBI) program is named Capital Investment Immigration Plan (CIIP). The foreign funds raised through this program is to enhance Vanuatu’s biofuels industry to becoming carbon zero by 2030. This opportunity allows Vietnam’s upper middle class expand their travel and business reach in the world with less hassle through a stronger Vanuatu passport, without civic duties or obligations.",
                                    vi: "Điều này cho phép tầng lớp trung lưu, thượng lưu của Việt Nam mở rộng phạm vi đi lại và kinh doanh trên thế giới với ít rắc rối hơn nhờ hộ chiếu Vanuatu."
                                },
                                language
                            )
                        }
                    </p>
                </div>
                <div
                    className="block col-span-5 sm:col-span-2 object-cover"
                >
                    <Image
                        className="block w-full object-cover"
                        width={0}
                        height={0}
                        sizes="100vw"
                        src="/images/8.jpg"
                        alt="VIMB-Vanuatu-Citizenship"
                    />

                </div>

            </div>


        </div>
    );
};

export default Introduce;