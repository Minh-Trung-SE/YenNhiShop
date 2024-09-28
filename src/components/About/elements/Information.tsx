import React from 'react';
import Image from "next/image";
import displayMessage from "@src/ultils/language";
import getServerLanguage from "@src/ultils/getServerLanguage";

const Information = () => {
    const language = getServerLanguage()
    return (

        <div className="flex flex-wrap gap-y-2 bg-primary">
            <div className="w-full sm:w-1/2 md:w-80 text-white p-2 m-2 border-gray-500 border-4">
                <br/>
                <p>
                    {
                        displayMessage(
                            {
                                en: "If your company is interested in becoming a sub-agent of the Vanuatu Citizenship Office, contact us to verify your eligibility, so that you can assist more Vietnamese people access international travel and favourable tax benefits.",
                                vi: "Nếu công ty của bạn quan tâm đến việc trở thành đại lý của Văn phòng Nhập tịch Vanuatu, hãy liên hệ với chúng tôi để xác minh tính đủ điều kiện của bạn, để bạn có thể hỗ trợ nhiều người Việt Nam hơn tiếp cận được các chuyến du lịch quốc tế và các lợi ích về thuế ưu đãi."
                            },
                            language
                        )
                    }
                </p>
            </div>

            <Image
                className="block grow h-80 object-cover"
                width={0}
                height={0}
                sizes="100vw"
                src="/images/vanuatu-citizenship-master-agent.jpg"
                alt="VIMB-Vanuatu-Citizenship"
            />

            <div className="w-full sm:w-1/2 md:w-80 text-white p-2 m-2 border-transparent border-4">
                <br/>
                <p>
                    {
                        displayMessage(
                            {
                                en: "VIMB has a strong history of success.",
                                vi: "VIMB có bề dày thành công."
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
                                en: "We are confident with our services that we make this promise:",
                                vi: "Chúng tôi tự tin với dịch vụ của mình mà chúng tôi thực hiện lời hứa này:"
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
                                en: "All service fees are refunded if your CIIP application fails!",
                                vi: "Tất cả phí dịch vụ sẽ được hoàn lại nếu ứng dụng CIIP của bạn không thành công."
                            },
                            language
                        )
                    }
                    </p>
            </div>



        </div>
    );
};

export default Information;