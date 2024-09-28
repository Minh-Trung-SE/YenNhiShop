import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";
import Image from "next/image";

const OurService = () => {
    const language = getServerLanguage()

    const news = [
        {
            title: "Why Vanuatu’s Investment-Linked Citizenship Program Is the Best Option for a Second Passport",
            link: "https://vimb.vu/blog/why-vanuatus-investment-linked-citizenship-program-is-the-best-option-for-a-second-passport",
            image: "/upload/shutterstock_232728022.jpg",
            time: "August 7, 2024",
        },
        {
            title: "Vanuatu’s Investment-Linked Citizenship Program and Coconut Oil (CNO) Future Fund",
            link: "https://vimb.vu/blog/vanuatus-investment-linked-citizenship-program-and-coconut-oil-cno-future-fund",
            image: "/upload/shutterstock_149303819.jpg",
            time: "August 7, 2024",
        },
        {
            title: "China’s Growing Influence in Vanuatu: Aid, Investment, and Strategic Interests",
            link: "https://vimb.vu/blog/chinas-growing-influence-in-vanuatu-aid-investment-and-strategic-interests/",
            image: "/upload/image-visualizing-Chinas-Growing-Influence-in-the-small-Pacific-island-nation-of-Vanuatu.jpeg",
            time: "August 7, 2024"
        },
        {
            title: "Lifting Dreams: How Ajah Pritchard Lolo Became Vanuatu’s Olympic Weightlifting Icon",
            link: "https://vimb.vu/blog/lifting-dreams-how-ajah-pritchard-lolo-became-vanuatus-olympic-weightlifting-icon/",
            image: "/upload/Lifting-Dreams.-How-Ajah-Pritchard-Lolo-Became-Vanuatus-Olympic-Weightlifting-Icon.jpg",
            time: "August 7, 2024"
        },
    ]

    return (
        <div className="space-y-10">
            <h2 className="font-medium text-3xl">
                {
                    displayMessage(
                        {
                            en: "Our Service",
                            vi: "Dịch vụ của chúng tôi"
                        },
                        language
                    )
                }
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="aspect-square sm:aspect-video relative">
                    <Image
                        className="z-0 absolute w-full h-full object-cover rounded"
                        sizes="100vw"
                        width={0}
                        height={0}
                        src="/images/vimb-vanuatu-citizenship-by-investment.jpg"
                        alt="vimb-vanuatu-citizenship-by-investment"
                    />
                    <div className="absolute flex flex-col p-5 space-y-2 justify-start h-full w-full bg-primary/20">
                        <h2 className="text-white font-medium">
                            {
                                displayMessage(
                                    {
                                        vi: "Nhập Tịch Vanuatu – Dịch vụ trọn gói",
                                        en: "Vanuatu Citizenship – End to End Service"
                                    },
                                    language
                                )
                            }
                        </h2>
                        <p className="text-white text-sm">
                            {
                                displayMessage(
                                    {
                                        vi: "VIMB là Đại lý được Chính phủ chỉ định đầu tiên toàn cầu hóa chương trình CBI đầu tiên của Vanuatu vào năm 2017, DSP. Công ty tiếp tục là đơn vị dẫn đầu trong việc cung cấp dịch vụ trọn gói, liền mạch cho khách hàng. Điều này có nghĩa là bạn không làm việc thông qua BẤT KỲ bên trung gian nào – chỉ có các đại lý được thẩm định, có uy tín và được ủy quyền.",
                                        en: "VIMB was the first Government Designated Agent to globalise Vanuatu’s first CBI program in 2017, DSP. It continues to be the leader in providing seamless, end-to-end service to its clients. This means you are not working through ANY intermediaries – only vetted, reputable and authorised sub agents."
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </div>
                <div className="aspect-square sm:aspect-video relative">
                    <Image
                        className="z-0 absolute w-full h-full object-cover rounded"
                        sizes="100vw"
                        width={0}
                        height={0}
                        src="/background/VIMB-About-US.jpg"
                        alt="vimb-vanuatu-citizenship-by-investment"
                    />
                    <div className="absolute flex flex-col p-5 space-y-2 justify-start h-full w-full bg-primary/70">
                        <h2 className="text-white font-medium">
                            {
                                displayMessage(
                                    {
                                        vi: "Dịch vụ sau khi nhập tịch",
                                        en: "Post-Citizenship Services"
                                    },
                                    language
                                )
                            }
                        </h2>
                        <p className="text-white text-sm">
                            {
                                displayMessage(
                                    {
                                        vi: "VIMB có trụ sở chính tại Port Villa, Vanuatu, có đội ngũ chuyên gia cung cấp dịch vụ đầy đủ, cung cấp nguồn lực vô song để hỗ trợ các kế hoạch tương lai của bạn với tư cách là công dân Vanuatu. Các dịch vụ đó bao gồm:",
                                        en: "VIMB headquartered in Port Villa, Vanuatu is staffed by a full-service professional team who provide an unrivalled depth of resources for supporting your future plans as a Vanuatu citizen. Such services include:"
                                    },
                                    language
                                )
                            }
                        </p>

                        {
                            displayMessage(
                                {
                                    vi: (
                                        <ul className="text-white">
                                            <li>• Công ty trong/ngoài nước Vanuatu</li>
                                            <li>• Mở tài khoản ngân hàng</li>
                                            <li>• Cho thuê hoặc đầu tư bất động sản</li>
                                            <li>• Thiết lập nơi cư trú</li>
                                            <li>• Xin thẻ căn cước công dân</li>
                                            <li>• Các vấn đề về thuế và mã số thuế</li>
                                            <li>• Tư vấn về cách đầu tư vào Vanuatu</li>
                                            <li>• Hỗ trợ tài liệu - Chứng nhận, thay thế tài liệu, tài liệu bổ sung</li>

                                        </ul>
                                    ),
                                    en: (
                                        <ul className="text-white">
                                            <li>• Vanuatu On-Shore/Offshore Company</li>
                                            <li>• Bank Account Opening</li>
                                            <li>• Property Rental or Investment</li>
                                            <li>• Establishing Residency</li>
                                            <li>• Obtaining a National ID Card</li>
                                            <li>• Tax and Tax ID matters</li>
                                            <li>• Advice on how to invest in Vanuatu</li>
                                            <li>• Documentation Support - Certifications, replacement of documents,
                                                supplementary documents
                                            </li>

                                        </ul>
                                    )
                                },
                                language
                            )
                        }

                    </div>
                </div>
            </div>
            <div className="h-[600px] w-full relative rounded">
                <Image
                    className="z-0 absolute object-cover w-full h-full rounded"
                    sizes="100vw"
                    width={0}
                    height={0}
                    src="/images/vanuatu-citizenship-application-family.jpg"
                    alt="vimb-vanuatu-citizenship-by-investment"
                />
                <div className="absolute flex flex-col space-y-2 justify-end h-full w-full bg-primary/70 rounded">
                    <div className="h-fit flex justify-center flex-wrap">
                        <div className="w-40 bg-white/20 space-y-5 p-4">
                            <svg className="h-10 w-10 mx-auto fill-white" viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path
                                        d="M348.45,432.7H261.8a141.5,141.5,0,0,1-49.52-8.9l-67.5-25.07a15,15,0,0,1,10.45-28.12l67.49,25.07a111.79,111.79,0,0,0,39.08,7h86.65a14.21,14.21,0,1,0,0-28.42,15,15,0,0,1,0-30H368.9a14.21,14.21,0,1,0,0-28.42,15,15,0,0,1,0-30h20.44a14.21,14.21,0,0,0,10.05-24.26,14.08,14.08,0,0,0-10.05-4.16,15,15,0,0,1,0-30h20.45a14.21,14.21,0,0,0,10-24.26,14.09,14.09,0,0,0-10-4.17H268.15A15,15,0,0,1,255,176.74a100.2,100.2,0,0,0,9.2-29.33c3.39-21.87-.79-41.64-12.42-58.76a12.28,12.28,0,0,0-22.33,7c.49,51.38-23.25,88.72-68.65,108a15,15,0,1,1-11.72-27.61c18.72-8,32.36-19.75,40.55-35.08,6.68-12.51,10-27.65,9.83-45C199.31,77,211,61,229.18,55.34s36.81.78,47.45,16.46c24.71,36.36,20.25,74.1,13.48,97.21H409.79a44.21,44.21,0,0,1,19.59,83.84,44.27,44.27,0,0,1-20.44,58.42,44.27,44.27,0,0,1-20.45,58.43,44.23,44.23,0,0,1-40,63Z"
                                    />
                                    <path
                                        d="M155,410.49H69.13a15,15,0,0,1-15-15V189.86a15,15,0,0,1,15-15H155a15,15,0,0,1,15,15V395.49A15,15,0,0,1,155,410.49Zm-70.84-30H140V204.86H84.13Z"
                                    />
                                </g>
                            </svg>
                            <hr/>
                            <div>
                                <p className="text-center font-medium text-2xl text-white">+500</p>
                                <p className="text-center text-white text-sm">Happy Clients</p>
                            </div>
                        </div>
                        <div className="w-40 bg-white/10 space-y-5 p-4">
                            <svg
                                className="mx-auto w-10 h-10"
                                enableBackground="new 0 0 512 512"
                                id="Layer_1"
                                version="1.1"
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <path
                                    d="M409.6,0.1H102.4C74.7,0.1,52,23.1,52,51.1v409.5c0,28,22.7,51,50.4,51c25.3,4.7,73.5-54.7,138.8-142.8  c11.8-15.8,21.8-9.4,28.5-0.2c72.5,99.6,124.6,146.2,139.9,143c27.7,0,50.4-22.9,50.4-51V51.1C460,23.1,437.3,0.1,409.6,0.1z   M206.8,80.7l23-3.3c3.2-0.5,5.9-2.4,7.3-5.3l10.3-20.8c3.6-7.2,13.8-7.2,17.4,0L275,72c1.4,2.9,4.1,4.8,7.3,5.3l23,3.3  c8,1.2,11.1,10.9,5.4,16.5L294,113.4c-2.3,2.2-3.3,5.4-2.8,8.6l3.9,22.9c1.4,7.9-7,14-14.1,10.2l-20.5-10.8c-2.8-1.5-6.2-1.5-9,0  l-20.5,10.8c-7.1,3.7-15.4-2.3-14.1-10.2l3.9-22.9c0.5-3.1-0.5-6.4-2.8-8.6l-16.6-16.2C195.6,91.6,198.8,81.8,206.8,80.7z   M403.5,267.8c0,8-6.6,14.6-14.6,14.6H123.1c-8,0-14.6-6.6-14.6-14.6v-4.6c0-8,6.6-14.6,14.6-14.6h265.8c8,0,14.6,6.6,14.6,14.6  V267.8z M403.5,201.2c0,8-6.6,14.6-14.6,14.6H123.1c-8,0-14.6-6.6-14.6-14.6v-4.6c0-8,6.6-14.6,14.6-14.6h265.8  c8,0,14.6,6.6,14.6,14.6V201.2z"
                                    className="fill-white"
                                />
                            </svg>
                            <hr/>
                            <div>
                                <p className="text-center font-medium text-2xl text-white">+500</p>
                                <p className="text-center text-white text-sm">Citizenship Granted</p>
                            </div>
                        </div>
                        <div className="w-40 bg-white/20 space-y-5 p-4">
                            <svg
                                className="mx-auto w-10 h-10"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path className="stroke-white" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle className="stroke-white" cx={12} cy={7} r={4}/>
                            </svg>
                            <hr/>
                            <div>
                                <p className="text-center font-medium text-2xl text-white">+41</p>
                                <p className="text-center text-white">Nationalities Helped</p>
                            </div>
                        </div>
                        <div className="w-40 bg-white/10 space-y-5 p-4">
                            <svg
                                enableBackground="new 0 0 500 500"
                                className="mx-auto w-10 h-10"
                                version="1.1"
                                viewBox="0 0 500 500"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <g>
                                    <line
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                        x1="363.459"
                                        x2="397.066"
                                        y1="82.696"
                                        y2="82.696"
                                    />
                                    <path
                                        d="   M397.066,82.696c11.988,0,21.689,9.811,21.689,21.939"
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                    />
                                    <line
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                        x1="418.756"
                                        x2="418.756"
                                        y1="104.636"
                                        y2="453.047"
                                    />
                                    <path
                                        d="   M418.756,453.047c0,12.114-9.701,21.953-21.689,21.953"
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                    />
                                    <line
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                        x1="397.066"
                                        x2="102.932"
                                        y1={475}
                                        y2={475}
                                    />
                                    <path
                                        d="   M102.932,475c-11.975,0-21.688-9.839-21.688-21.953"
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                    />
                                    <line
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                        x1="81.244"
                                        x2="81.244"
                                        y1="453.047"
                                        y2="104.636"
                                    />
                                    <path
                                        d="   M81.244,104.636c0-12.128,9.713-21.939,21.688-21.939"
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                    />
                                    <line
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                        x1="102.932"
                                        x2="131.906"
                                        y1="82.696"
                                        y2="82.696"
                                    />
                                    <polyline
                                        fill="none"
                                        points="   342.859,50.625 286.991,50.625 286.991,45.851  "
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                    />
                                    <path
                                        d="   M286.991,45.851c0-11.542-9.24-20.851-20.571-20.851"
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                    />
                                    <line
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                        x1="266.42"
                                        x2="233.621"
                                        y1={25}
                                        y2={25}
                                    />
                                    <path
                                        d="   M233.621,25c-11.359,0-20.627,9.309-20.627,20.851"
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                    />
                                    <polyline
                                        fill="none"
                                        points="   212.994,45.851 212.994,50.625 157.181,50.625  "
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                    />
                                    <path
                                        d="   M157.181,50.625c-11.374,0-20.599,9.35-20.599,20.878"
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                    />
                                    <polyline
                                        fill="none"
                                        points="   136.582,71.503 136.582,115.857 363.459,115.857 363.459,71.503  "
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                    />
                                    <path
                                        d="   M363.459,71.503c0-11.528-9.184-20.878-20.6-20.878"
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                    />
                                    <g>
                                        <line
                                            fill="none"
                                            className="stroke-white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="2.6131"
                                            strokeWidth={10}
                                            x1="137.6"
                                            x2="156.218"
                                            y1="221.173"
                                            y2="238.492"
                                        />
                                        <line
                                            fill="none"
                                            className="stroke-white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="2.6131"
                                            strokeWidth={10}
                                            x1="190.412"
                                            x2="156.218"
                                            y1="200.699"
                                            y2="238.492"
                                        />
                                    </g>
                                    <line
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                        x1="222.875"
                                        x2="362.44"
                                        y1="223.462"
                                        y2="223.462"
                                    />
                                    <line
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                        x1="222.875"
                                        x2="362.44"
                                        y1="392.56"
                                        y2="392.56"
                                    />
                                    <line
                                        fill="none"
                                        className="stroke-white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.6131"
                                        strokeWidth={10}
                                        x1="222.875"
                                        x2="362.44"
                                        y1="309.239"
                                        y2="309.239"
                                    />
                                </g>
                            </svg>
                            <hr/>
                            <div>
                                <p className="text-center font-medium text-2xl text-white">97%</p>
                                <p className="text-center text-white">Success Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary py-10 space-y-2 p-5">
                        <h2 className="text-white text-center font-medium">
                            {
                                displayMessage(
                                    {
                                        vi: "VIMB có lịch sử thành công và tính hợp pháp mạnh mẽ. Chúng tôi tự tin với các dịch vụ của mình rằng chúng tôi cam kết:",
                                        en: "VIMB has a strong history of success, and legitimacy. We are confident with our services that we make this promise:"
                                    },
                                    language
                                )
                            }
                        </h2>
                        <h2 className="text-vn-red text-center font-medium">
                            {
                                displayMessage(
                                    {
                                        vi: "Tất cả phí dịch vụ sẽ được hoàn lại nếu đơn xin CIIP của bạn không thành công.",
                                        en: "All service fees are refunded if your CIIP application fails."
                                    },
                                    language
                                )
                            }
                        </h2>
                        <p className="text-white text-center text-sm">
                            {
                                displayMessage(
                                    {
                                        vi: "Hơn 40 công ty luật và di trú được ủy quyền là đại lý của VIMB tại Việt Nam. Luôn kiểm tra thông tin xác thực của họ bằng cách yêu cầu xem giấy chứng nhận ủy quyền của họ với VIMB.VN trước khi tiến hành",
                                        en: "Over 40 legal and migration firms, authorised as sub-agents of VIMB in Vietnam. Always check their credentials by asking to see their authorisation certificate with VIMB.VN before proceeding"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OurService;