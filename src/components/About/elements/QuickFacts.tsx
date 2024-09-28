import React from 'react';
import getServerLanguage from "@src/ultils/getServerLanguage";
import displayMessage from "@src/ultils/language";

const QuickFacts = () => {
    const language = getServerLanguage()

    return (
        <div className="space-y-10">
            <h2 className="font-medium text-2xl">Vanuatu Quick Facts</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <li className="flex items-center space-x-3 border rounded p-2">
                    {/*<svg className="size-10" data-name="Layer 1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <path*/}
                    {/*        d="M14.36,14.23a3.76,3.76,0,0,1-4.72,0,1,1,0,0,0-1.28,1.54,5.68,5.68,0,0,0,7.28,0,1,1,0,1,0-1.28-1.54ZM10.5,10A1.5,1.5,0,1,0,9,11.5,1.5,1.5,0,0,0,10.5,10ZM15,9H14a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"*/}
                    {/*        className="fill-vn-red"*/}
                    {/*    />*/}
                    {/*</svg>*/}
                    <div
                        className="flex-none size-10 border-primary border-2 rounded-full text-primary flex items-center justify-center text-lg"
                    >
                        1
                    </div>
                    <div className="grow">
                        <p className="font-medium text-lg">
                            {
                                displayMessage(
                                    {
                                        vi: "Hạnh phúc",
                                        en: "Happiest"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className='text-sm'>
                            {
                                displayMessage(
                                    {
                                        vi: "Chỉ số xếp hạng hạnh phúc thứ 2",
                                        en: "2nd Happiest People Index Rank"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </li>
                <li className="flex items-center space-x-3 border rounded p-2">
                    {/*<svg className="size-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <path*/}
                    {/*        d="M21.32,5.05l-6-2h-.07a.7.7,0,0,0-.14,0h-.23l-.13,0h-.07L9,5,3.32,3.05a1,1,0,0,0-.9.14A1,1,0,0,0,2,4V18a1,1,0,0,0,.68.95l6,2h0a1,1,0,0,0,.62,0h0L15,19.05,20.68,21A1.19,1.19,0,0,0,21,21a.94.94,0,0,0,.58-.19A1,1,0,0,0,22,20V6A1,1,0,0,0,21.32,5.05ZM8,18.61,4,17.28V5.39L8,6.72Zm6-1.33-4,1.33V6.72l4-1.33Zm6,1.33-4-1.33V5.39l4,1.33Z"*/}
                    {/*        fill="#6563ff"*/}
                    {/*    />*/}
                    {/*</svg>*/}
                    <div
                        className="flex-none size-10 border-primary border-2 rounded-full text-primary flex items-center justify-center text-lg"
                    >
                        2
                    </div>
                    <div className="grow">
                        <p className="font-medium text-lg">
                            {
                                displayMessage(
                                    {
                                        vi: "Quốc đảo",
                                        en: "Islands"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className='text-sm'>
                            {
                                displayMessage(
                                    {
                                        vi: "Trải dài 1.300km và 12.000km²",
                                        en: "Spanning 1,300km and 12,000km²"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </li>
                <li className="flex items-center space-x-3 border rounded p-2">
                    <div
                        className="flex-none size-10 border-primary border-2 rounded-full text-primary flex items-center justify-center text-lg"
                    >
                        3
                    </div>
                    <div className="grow">
                        <p className="font-medium text-lg">
                            {
                                displayMessage(
                                    {
                                        vi: "Vanuatu",
                                        en: "Vanuatu"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className='text-sm'>
                            {
                                displayMessage(
                                    {
                                        vi: "83 hòn đảo (65 có dân cư)",
                                        en: "83 Islands (65 are populated)"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </li>
                <li className="flex items-center space-x-3 border rounded p-2">
                    {/*<svg className="size-10" data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24"*/}
                    {/*     xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <path*/}
                    {/*        d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"*/}
                    {/*        fill="#6563ff"/>*/}
                    {/*</svg>*/}
                    <div
                        className="flex-none size-10 border-primary border-2 rounded-full text-primary flex items-center justify-center text-lg"
                    >
                        4
                    </div>
                    <div className="grow">
                        <p className="font-medium text-lg">
                            {
                                displayMessage(
                                    {
                                        vi: "Úc",
                                        en: "Australia"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className='text-sm'>
                            {
                                displayMessage(
                                    {
                                        vi: "Chuyến bay 2,5 giờ từ Úc",
                                        en: "2.5 hour flight from Australia"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </li>
                <li className="flex items-center space-x-3 border rounded p-2">
                    {/*<svg className="size-10" fill="none" height="24" viewBox="0 0 24 24" width="24"*/}
                    {/*     xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <path fill="#6563ff" clipRule="evenodd"*/}
                    {/*          d="M20.3698 10.3405C21.5279 8.80916 23 6.50179 23 4.66667C23 2.64162 21.2091 1 19 1C16.7909 1 15 2.64162 15 4.66667C15 6.50179 16.4721 8.80916 17.6302 10.3405C18.3317 11.268 19.6683 11.268 20.3698 10.3405ZM19 6C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4C18.4477 4 18 4.44772 18 5C18 5.55228 18.4477 6 19 6ZM15.2071 8.79289C15.5976 9.18342 15.5976 9.81658 15.2071 10.2071L11.2071 14.2071C10.8166 14.5976 10.1834 14.5976 9.79289 14.2071C9.40237 13.8166 9.40237 13.1834 9.79289 12.7929L13.7929 8.79289C14.1834 8.40237 14.8166 8.40237 15.2071 8.79289ZM9 16.6667C9 18.5018 7.52794 20.8092 6.36985 22.3405C5.66835 23.268 4.33165 23.268 3.63015 22.3405C2.47206 20.8092 1 18.5018 1 16.6667C1 14.6416 2.79086 13 5 13C7.20914 13 9 14.6416 9 16.6667ZM6 17C6 17.5523 5.55228 18 5 18C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16C5.55228 16 6 16.4477 6 17Z"*/}
                    {/*          fillRule="evenodd"/>*/}
                    {/*</svg>*/}
                    <div
                        className="flex-none size-10 border-primary border-2 rounded-full text-primary flex items-center justify-center text-lg"
                    >
                        5
                    </div>
                    <div className="grow">
                        <p className="font-medium text-lg">
                            {
                                displayMessage(
                                    {
                                        vi: "New Zealand",
                                        en: "New Zealand"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className='text-sm'>
                            {
                                displayMessage(
                                    {
                                        vi: "Chuyến bay 3,5 giờ từ New Zealand",
                                        en: "3.5 hour flight from New Zealand"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </li>

                <li className="flex items-center space-x-3 border rounded p-2">
                    {/*<svg id="Layer_3" version="1.1" viewBox="0 0 32 32"*/}
                    {/*     xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"*/}
                    {/*     xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                    {/*     className="size-10"*/}
                    {/*>*/}
                    {/*    <g>*/}
                    {/*        <path*/}
                    {/*            fill="#6563ff"*/}
                    {/*            d="M20,16c0-0.552-0.448-1-1-1h-6c-0.552,0-1,0.448-1,1v3c0,2.206,1.794,4,4,4s4-1.794,4-4V16z M18,19c0,1.103-0.897,2-2,2   s-2-0.897-2-2v-2h4V19z"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            fill="#6563ff"*/}
                    {/*            d="M25,19c2.206,0,4-1.794,4-4v-3c0-0.552-0.448-1-1-1h-6c-0.552,0-1,0.448-1,1v3C21,17.206,22.794,19,25,19z M23,13h4v2   c0,1.103-0.897,2-2,2s-2-0.897-2-2V13z"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            fill="#6563ff"*/}
                    {/*            d="M4,11c-0.552,0-1,0.448-1,1v3c0,2.206,1.794,4,4,4s4-1.794,4-4v-3c0-0.552-0.448-1-1-1H4z M9,15c0,1.103-0.897,2-2,2   s-2-0.897-2-2v-2h4V15z"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            fill="#6563ff"*/}
                    {/*            d="M22,24H10c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1s1-0.448,1-1v-3h10v3c0,0.552,0.448,1,1,1s1-0.448,1-1v-4   C23,24.448,22.552,24,22,24z"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            fill="#6563ff"*/}
                    {/*            d="M29,20h-8c-0.552,0-1,0.448-1,1s0.448,1,1,1h7v2c0,0.552,0.448,1,1,1s1-0.448,1-1v-3C30,20.448,29.552,20,29,20z"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            fill="#6563ff"*/}
                    {/*            d="M3,25c0.552,0,1-0.448,1-1v-2h7c0.552,0,1-0.448,1-1s-0.448-1-1-1H3c-0.552,0-1,0.448-1,1v3C2,24.552,2.448,25,3,25z"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            fill="#6563ff"*/}
                    {/*            d="M22,10V6c0-0.552-0.448-1-1-1h-6V3c0-0.552-0.448-1-1-1H6C5.448,2,5,2.448,5,3v4c0,0.552,0.448,1,1,1h1.382l0.724,1.447   c0.151,0.302,0.444,0.507,0.779,0.546C8.923,9.998,8.962,10,9,10c0.295,0,0.577-0.13,0.768-0.36L11.135,8H12v2c0,0.552,0.448,1,1,1   h2.865l1.367,1.64C17.423,12.87,17.705,13,18,13c0.038,0,0.077-0.002,0.115-0.007c0.335-0.039,0.628-0.244,0.779-0.546L19.618,11   H21C21.552,11,22,10.552,22,10z M10.667,6c-0.297,0-0.578,0.132-0.768,0.36L9.21,7.185L8.895,6.553C8.725,6.214,8.379,6,8,6H7V4h6   v1c-0.552,0-1,0.448-1,1H10.667z M20,9h-1c-0.379,0-0.725,0.214-0.895,0.553l-0.316,0.632L17.102,9.36   C16.912,9.132,16.63,9,16.333,9H14V7h0.01H20V9z"*/}
                    {/*        />*/}
                    {/*    </g>*/}
                    {/*</svg>*/}
                    <div
                        className="flex-none size-10 border-primary border-2 rounded-full text-primary flex items-center justify-center text-lg"
                    >
                        6
                    </div>
                    <div className="grow">
                        <p className="font-medium text-lg">
                            {
                                displayMessage(
                                    {
                                        vi: "Công dân",
                                        en: "Citizenship"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className='text-sm'>
                            {
                                displayMessage(
                                    {
                                        vi: "Kế thừa quốc tịch và quyền công dân",
                                        en: "Citizenship is hereditary"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </li>
                <li className="flex items-center space-x-3 border rounded p-2">
                    {/*<svg className="size-10" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <g id="a"/>*/}
                    {/*    <g id="b"/>*/}
                    {/*    <g id="c"/>*/}
                    {/*    <g id="d"/>*/}
                    {/*    <g id="e"/>*/}
                    {/*    <g id="f"/>*/}
                    {/*    <g id="g"/>*/}
                    {/*    <g id="h"/>*/}
                    {/*    <g id="i">*/}
                    {/*        <path*/}
                    {/*            d="M32.92,6.1c-1.55,0-2.8,1.25-2.8,2.81,0,1.78-1.44,3.22-3.22,3.22h-1.72c-1,0-1.81,.81-1.81,1.81s.81,1.81,1.81,1.81h1.24c1,0,1.87,1.03,1.87,2.04v1.76l4.07,1.44,4.42-1.44v-2.59h2.78c1,0,1.81-.81,1.81-1.81s-.81-1.81-1.81-1.81h-2.42c-1,0-1.81-.81-1.81-1.81s.81-1.81,1.81-1.81h6.2c1,0,1.81-.81,1.81-1.81s-.81-1.81-1.81-1.81h-10.41Z"*/}
                    {/*            fill="#f0f4f6" fillRule="evenodd"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            d="M42.29,28.41c-.23,0-.46,.02-.68,.06l-1.71,.31-.49,.21c-4.48,4.96,9.39,17.11,9.39,17.11l2.62-8.16-2.25-6.02c-.24-.63-.72-1.14-1.34-1.41l-4.2-1.81c-.42-.18-.87-.28-1.33-.29Z"*/}
                    {/*            fill="#758797" fillRule="evenodd"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            d="M56.4,51.64l.17-8.87c.02-.98-.45-1.9-1.24-2.46l-2.82-1.99c-.75-.53-1.77-.49-2.47,.1l-1.54,1.29-1.03,10.54,8.94,1.38Z"*/}
                    {/*            fill="#8598ab" fillRule="evenodd"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            d="M52.48,49.47l-3.72-9.21c-.49-1.22-1.34-2.25-2.44-2.97l-3.86-2.54c-1.08-.71-1.82-1.82-2.04-3.09l-1.84-10.14c-.21-1.15-1.21-1.98-2.38-1.98h-7.34c-1.19,0-2.23,.8-2.54,1.95l-.73,2.68-1.13,4.16c-.35,1.23-1.07,2.32-2.07,3.12l-3.46,2.8c-1.03,.83-1.81,1.92-2.28,3.15l-.66,1.76,1.19,12.92,35.3-2.61Z"*/}
                    {/*            fill="#9dacb9" fillRule="evenodd"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            d="M18.79,40.75l2.87-1.04c.55-.2,1.16-.19,1.7,.04l2.88,1.2c.53,.22,.9,.69,1,1.25l.71,4.19-6.93,2.23s-3.47-5.55-2.23-7.87Z"*/}
                    {/*            fill="#758797" fillRule="evenodd"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            d="M13.29,37.87c-.4,.01-.77,.18-1.04,.47l-2.73,2.99c-.5,.54-.74,1.27-.67,2.01l.65,7.09,11.51-3.41-.62-4.32c-.11-.72-.54-1.35-1.17-1.71l-5.18-2.93c-.23-.13-.49-.19-.75-.19Z"*/}
                    {/*            fill="#8598ab" fillRule="evenodd"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            d="M32,46.3c-20.26,0-27,6.13-27,9.08,0,1.4,1.25,2.53,2.8,2.53H56.2c1.55,0,2.8-1.13,2.8-2.53,0-2.95-6.74-9.08-27-9.08Z"*/}
                    {/*            fill="#feccba" fillRule="evenodd"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            d="M50.63,6.1h3.23c1,0,1.81,.81,1.81,1.81s-.81,1.81-1.81,1.81h-3.23c-1,0-1.81-.81-1.81-1.81s.81-1.81,1.81-1.81Z"*/}
                    {/*            fill="#f0f4f6" fillRule="evenodd"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            d="M46.17,13.06c-1.15,0-2.08,.93-2.08,2.08s.93,2.08,2.08,2.08h2.68c.81,0,1.45,.65,1.45,1.46s-.65,1.46-1.45,1.46h-5.32c-1.15,0-2.08,.93-2.08,2.08s.93,2.08,2.08,2.08h13.39c1.15,0,2.08-.93,2.08-2.08s-.93-2.08-2.08-2.08h-1.65c-.81,0-1.46-.65-1.46-1.46s.65-1.46,1.46-1.46h.89c1.15,0,2.08-.93,2.08-2.08s-.93-2.08-2.08-2.08h-9.99Z"*/}
                    {/*            fill="#f0f4f6" fillRule="evenodd"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            d="M18.88,17.08c1.15,0,2.08,.93,2.08,2.08s-.93,2.08-2.08,2.08h-3.73c-.81,0-1.45,.65-1.45,1.46s.65,1.46,1.45,1.46h14.62c1.15,0,2.08,.93,2.08,2.08s-.93,2.08-2.08,2.08H7.08c-1.15,0-2.08-.93-2.08-2.08s.93-2.08,2.08-2.08h1.65c.81,0,1.46-.65,1.46-1.46s-.65-1.46-1.46-1.46h-.89c-1.15,0-2.08-.93-2.08-2.08s.93-2.08,2.08-2.08h11.04Z"*/}
                    {/*            fill="#f0f4f6" fillRule="evenodd"*/}
                    {/*        />*/}
                    {/*        <path*/}
                    {/*            d="M51.3,6.1c1,0,1.81,.81,1.81,1.81s-.81,1.81-1.81,1.81h2.56c1,0,1.81-.81,1.81-1.81s-.81-1.81-1.81-1.81h-2.56Z"*/}
                    {/*            fill="#e2eef2" fillRule="evenodd"*/}
                    {/*        />*/}
                    {/*        <circle cx="46.65" cy="53.9" fill="#fcbfad" r="1"/>*/}
                    {/*        <circle cx="39.54" cy="51.03" fill="#fcbfad" r="1"/>*/}
                    {/*        <circle cx="32.52" cy="54.02" fill="#fcbfad" r="1"/>*/}
                    {/*        <circle cx="22.51" cy="51.84" fill="#fcbfad" r="1"/>*/}
                    {/*        <circle cx="17.07" cy="53.06" fill="#fcbfad" r="1"/>*/}
                    {/*    </g>*/}
                    {/*    <g id="j"/>*/}
                    {/*    <g id="k"/>*/}
                    {/*    <g id="l"/>*/}
                    {/*    <g id="m"/>*/}
                    {/*    <g id="n"/>*/}
                    {/*    <g id="o"/>*/}
                    {/*    <g id="p"/>*/}
                    {/*    <g id="q"/>*/}
                    {/*    <g id="r"/>*/}
                    {/*    <g id="s"/>*/}
                    {/*    <g id="t"/>*/}
                    {/*    <g id="u"/>*/}
                    {/*    <g id="v"/>*/}
                    {/*    <g id="w"/>*/}
                    {/*    <g id="x"/>*/}
                    {/*    <g id="y"/>*/}
                    {/*    <g id="a`"/>*/}
                    {/*    <g id="aa"/>*/}
                    {/*    <g id="ab"/>*/}
                    {/*    <g id="ac"/>*/}
                    {/*    <g id="ad"/>*/}
                    {/*    <g id="ae"/>*/}
                    {/*    <g id="af"/>*/}
                    {/*    <g id="ag"/>*/}
                    {/*    <g id="ah"/>*/}
                    {/*    <g id="ai"/>*/}
                    {/*    <g id="aj"/>*/}
                    {/*    <g id="ak"/>*/}
                    {/*    <g id="al"/>*/}
                    {/*    <g id="am"/>*/}
                    {/*    <g id="an"/>*/}
                    {/*    <g id="ao"/>*/}
                    {/*    <g id="ap"/>*/}
                    {/*    <g id="aq"/>*/}
                    {/*    <g id="ar"/>*/}
                    {/*    <g id="as"/>*/}
                    {/*    <g id="at"/>*/}
                    {/*    <g id="au"/>*/}
                    {/*    <g id="av"/>*/}
                    {/*    <g id="aw"/>*/}
                    {/*    <g id="ax"/>*/}
                    {/*</svg>*/}
                    <div
                        className="flex-none size-10 border-primary border-2 rounded-full text-primary flex items-center justify-center text-lg"
                    >
                        7
                    </div>
                    <div className="grow">
                        <p className="font-medium text-lg">
                            {
                                displayMessage(
                                    {
                                        vi: "Đất núi lửa",
                                        en: "Volcanic soil"
                                    },
                                    language
                                )
                            }

                        </p>
                        <p className='text-sm'>
                            {
                                displayMessage(
                                    {
                                        vi: "Đất núi lửa có nghĩa là sản phẩm hữu cơ có giá trị dinh dưỡng cao",
                                        en: "Means organic produce are highly nutritious"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </li>
                <li className="flex items-center space-x-3 border rounded p-2">
                    <div
                        className="size-10 border-primary border-2 rounded-full text-primary flex items-center justify-center text-lg"
                    >
                        8
                    </div>
                    <div className="grow">
                        <p className="font-medium text-lg">
                            {
                                displayMessage(
                                    {
                                        vi: "Thịt bò",
                                        en: "Beef"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className='text-sm'>
                            {
                                displayMessage(
                                    {
                                        vi: "Thịt bò ăn cỏ là sản phẩm xuất khẩu chất lượng cao",
                                        en: "Grass fed beef are high quality exports"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </li>
                <li className="flex items-center space-x-3 border rounded p-2">
                    <div
                        className="size-10 border-primary border-2 rounded-full text-primary flex items-center justify-center text-lg"
                    >
                        9
                    </div>
                    <div className="grow">
                        <p className="font-medium text-lg">
                            {
                                displayMessage(
                                    {
                                        vi: "Hải sản",
                                        en: "Seafood"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className='text-sm'>
                            {
                                displayMessage(
                                    {
                                        vi: "Hải sản dồi dào từ vùng biển hoang sơ",
                                        en: "Seafood is abundant from pristine waters"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </li>
                <li className="flex items-center space-x-3 border rounded p-2">
                    <div
                        className="size-10 border-primary border-2 rounded-full text-primary flex items-center justify-center text-lg"
                    >
                        10
                    </div>
                    <div className="grow">
                        <p className="font-medium text-lg">
                            {
                                displayMessage(
                                    {
                                        vi: "Nông sản",
                                        en: "Agriculture"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className='text-sm'>
                            {
                                displayMessage(
                                    {
                                        vi: "Nông nghiệp sử dụng 65-80% dân số",
                                        en: "Agriculture is the main source of production"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </li>
                <li className="flex items-center space-x-3 border rounded p-2">
                    <div
                        className="size-10 border-primary border-2 rounded-full text-primary flex items-center justify-center text-lg"
                    >
                        11
                    </div>
                    <div className="grow">
                        <p className="font-medium text-lg">
                            {
                                displayMessage(
                                    {
                                        vi: "Du lịch",
                                        en: "Tourism"
                                    },
                                    language
                                )
                            }
                        </p>
                        <p className='text-sm'>
                            {
                                displayMessage(
                                    {
                                        vi: "Du lịch chiếm 40% GDP",
                                        en: "Tourism makes up 40% of GDP"
                                    },
                                    language
                                )
                            }
                        </p>
                    </div>
                </li>

            </ul>

        </div>
    )
        ;
};

export default QuickFacts;