import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";
import Image from "next/image";
import Link from "next/link";

const News = () => {
    const language = getServerLanguage()

    const news = [
        {
            title:  "Why Vanuatu’s Investment-Linked Citizenship Program Is the Best Option for a Second Passport",
            link: "https://vimb.vu/blog/why-vanuatus-investment-linked-citizenship-program-is-the-best-option-for-a-second-passport",
            image: "/upload/shutterstock_232728022.jpg",
            time: "August 7, 2024",
        },
        {
            title:  "Vanuatu’s Investment-Linked Citizenship Program and Coconut Oil (CNO) Future Fund",
            link: "https://vimb.vu/blog/vanuatus-investment-linked-citizenship-program-and-coconut-oil-cno-future-fund",
            image: "/upload/shutterstock_149303819.jpg",
            time: "August 7, 2024",
        },
        {
            title:  "China’s Growing Influence in Vanuatu: Aid, Investment, and Strategic Interests",
            link: "https://vimb.vu/blog/chinas-growing-influence-in-vanuatu-aid-investment-and-strategic-interests/",
            image: "/upload/image-visualizing-Chinas-Growing-Influence-in-the-small-Pacific-island-nation-of-Vanuatu.jpeg",
            time: "August 7, 2024"
        },
        {
            title:  "Lifting Dreams: How Ajah Pritchard Lolo Became Vanuatu’s Olympic Weightlifting Icon",
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
                            vi: "Tin tức mới nhất Vanuatu",
                            en: "Check the latest Vanuatu News"
                        },
                        language
                    )
                }
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    news.map(
                        (news, index) => (
                            <div key={index} className="space-y-2 border border-primary p-2">
                               <Image
                                   src={news.image}
                                   alt={news.image}
                                   width={0}
                                   height={0}
                                   sizes="100vw"
                                   className="w-full aspect-video"
                               />

                                <Link className="block text-sm" href={news.link} target="_blank">
                                    {news.title}
                                </Link>
                                <p className="text-primary text-xs" >{news.time}</p>
                                <Link className="block text-xs" href={news.link} target="_blank">
                                    Read more
                                </Link>
                            </div>
                        )
                    )
                }


            </div>

        </div>
    );
};

export default News;