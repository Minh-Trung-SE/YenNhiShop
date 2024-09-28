import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";

const ActsAs = () => {
    const language = getServerLanguage()

    return (
        <div className="py-10 space-y-10">
            <h2 className="font-medium text-center text-3xl">VIMB Viet Nam acts as</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="space-y-5 border border-primary p-5 rounded shadow">
                    <div className="mx-auto size-14 p-3 rounded-full border-2 border-primary">
                        <svg
                            className="h-full w-full"
                            viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="fill-primary"
                                d="M129.6 208c5.25 31.25 25.62 57.13 53.25 70.38C175.3 259.4 170.3 235 168.8 208H129.6zM129.6 176h39.13c1.5-27 6.5-51.38 14.12-70.38C155.3 118.9 134.9 144.8 129.6 176zM224 286.8C231.8 279.3 244.8 252.3 247.4 208H200.5C203.3 252.3 216.3 279.3 224 286.8zM265.1 105.6C272.8 124.6 277.8 149 279.3 176h39.13C313.1 144.8 292.8 118.9 265.1 105.6zM384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.2 0 64-28.8 64-64V64C448 28.8 419.2 0 384 0zM336 416h-224C103.3 416 96 408.8 96 400S103.3 384 112 384h224c8.75 0 16 7.25 16 16S344.8 416 336 416zM224 320c-70.75 0-128-57.25-128-128s57.25-128 128-128s128 57.25 128 128S294.8 320 224 320zM265.1 278.4c27.62-13.25 48-39.13 53.25-70.38h-39.13C277.8 235 272.8 259.4 265.1 278.4zM200.6 176h46.88C244.7 131.8 231.8 104.8 224 97.25C216.3 104.8 203.2 131.8 200.6 176z"
                            />
                        </svg>

                    </div>
                    <p className="text-center text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Tài liệu hành chính hỗ trợ quy trình xin quốc tịch và thường trú nhân Vanuatu",
                                    en: "An administrative resource for supporting the Vanuatu Citizenship and Vanuatu Permanent Residency application processes"
                                },
                                language
                            )
                        }

                    </p>
                </div>
                <div className="space-y-5 border border-primary p-5 rounded shadow">
                    <div className="mx-auto size-14 p-3 rounded-full border-2 border-primary">
                        <svg className='w-full h-full' viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                            <path
                                className="fill-primary"
                                d="M288 0C146.6 0 32 114.6 32 256s114.6 256 256 256s256-114.6 256-256S429.4 0 288 0zM370.1 289.5C371.6 288.5 373.1 288 374.8 288h12.11c3.148 0 6.055 2 7.387 5l5.328 12.75c.6055 1.5 2.059 2.5 3.633 2.5h3.875c1.695 0 3.27-1.125 3.754-2.875l4.238-14.5C415.6 289.3 417.2 288 419 288h6.055c2.18 0 3.996 1.75 3.996 4v13c0 2.125 .8477 4.125 2.301 5.625l11.87 11.88c3.027 3 4.723 7.125 4.723 11.38v24.5c0 1.793-.4531 3.52-1.021 5.195c-2.395 3.523-5.031 6.867-7.646 10.22l-5.5 5.461C430.8 382.3 426.7 384 422.4 384H407.3c-4.238 0-8.355-1.75-11.26-4.75l-13.08-13c-6.66-6.625-16.23-9.25-25.43-7l-21.19 5.375c-1.332 .25-2.664 .375-3.996 .375h-10.29c-4.238 0-8.355-1.625-11.26-4.625L298.8 348.5c-1.453-1.5-2.301-3.625-2.301-5.75v-10.12c0-3.25 1.938-6.25 5.086-7.5l39.23-15.75c2.059-.75 3.875-1.75 5.691-3L370.1 289.5zM288 48c18.66 0 36.66 2.699 53.88 7.328v.7344c0 9.945-4.623 19.32-12.51 25.38l-29.86 22.93c-5.086 3.375-4.723 11 .8477 13.75l10.78 5.5c5.449 2.625 8.84 8.25 8.84 14.25V216c0 4.375-3.512 8-7.992 8h-3.027c-3.027 0-5.812-1.75-7.145-4.375c-1.574-3.125-5.934-3.375-7.75-.375l-17.44 29C273.7 253 268.5 256 262.9 256H262.6C258.3 256 254.3 257.8 251.3 260.8L245.6 266.4c-3.027 3.125-3.027 8.125 0 11.25l5.691 5.75c3.027 3 4.723 7 4.723 11.25V304c0 8.875-7.145 16-15.98 16H233.9c-6.055 0-11.62-3.375-14.29-8.875L196.9 265.9C194.5 261 187.1 260 184.1 263.9L164.7 283.3C161.7 286.3 157.6 288 153.3 288H82.72C81.1 277.5 80 266.9 80 256C80 141.3 173.3 48 288 48z"
                            />
                        </svg>

                    </div>
                    <p className="text-center text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Tài liệu tham khảo về các cơ hội đầu tư và thương mại song phương tại Vanuatu",
                                    en: "A resource for exploring investment opportunities in Vanuatu, and bi-lateral trade"
                                },
                                language
                            )
                        }
                    </p>
                </div>
                <div className="space-y-5 border border-primary p-5 rounded shadow">
                    <div className="mx-auto size-14 p-3 rounded-full border-2 border-primary">
                        <svg className="w-full h-full" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                            <path
                                className="fill-primary"
                                d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"
                            />
                        </svg>

                    </div>
                    <p className="text-center text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Nguồn thông tin cho các vấn đề liên quan đến du lịch, đầu tư bất động sản và lữ hành",
                                    en: "An information resource for tourism, property investment and travel related enquiries"
                                },
                                language
                            )
                        }

                    </p>
                </div>
                <div className="space-y-5 border border-primary p-5 rounded shadow">
                    <div className="mx-auto size-14 p-3 rounded-full border-2 border-primary">
                        <svg
                            enableBackground="new 0 0 128 128"
                            version="1.1"
                            viewBox="0 0 128 128"
                            xmlSpace="preserve"
                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <g>
                                <path
                                className="fill-primary"
                                    d="M64,126c34.2,0,62-27.8,62-62S98.2,2,64,2S2,29.8,2,64S29.8,126,64,126z M16,88.7l25.2-0.2c2.8,10.1,7.5,19.9,13.9,28.7   C38,114.4,23.7,103.5,16,88.7z M47.6,47H79c2.3,11,2.3,22.3,0.2,33.3l-31.6,0.2C45.3,69.4,45.3,58,47.6,47z M63.3,114.9   c-6.3-8.1-10.9-17-13.7-26.4l27.5-0.2C74.2,97.7,69.6,106.7,63.3,114.9z M71.3,117.5c6.6-9,11.3-18.9,14.1-29.3l26.9-0.2   C104.5,103.7,89.3,115,71.3,117.5z M118,64c0,5.6-0.9,11-2.4,16l-28.3,0.2c2-11,1.9-22.2-0.2-33.2h28.1C117,52.3,118,58.1,118,64z    M111.8,39H85.2c-2.9-10-7.5-19.7-13.9-28.5C89,12.9,103.9,23.8,111.8,39z M76.9,39H49.7c2.9-9.2,7.4-17.9,13.6-25.9   C69.5,21.1,74,29.8,76.9,39z M55.1,10.8C48.8,19.5,44.2,29,41.4,39H16.2C23.9,24.3,38.1,13.6,55.1,10.8z M39.5,47   c-2.1,11.1-2.1,22.4-0.1,33.5l-26.7,0.2C10.9,75.4,10,69.8,10,64c0-5.9,1-11.7,2.8-17H39.5z"
                                />
                            </g>
                        </svg>

                    </div>
                    <p className="text-center text-sm">
                        {
                            displayMessage(
                                {
                                    vi: "Kênh liên lạc thông suốt giữa Vanuatu và các trung tâm địa lý quan trọng trên toàn cầu",
                                    en: "A link to provide seamless communication between Vanuatu and global key geographical centers"
                                },
                                language
                            )
                        }
                    </p>
                </div>

            </div>

        </div>
    );
};

export default ActsAs;