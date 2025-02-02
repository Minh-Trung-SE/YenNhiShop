import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            aspectRatio: {
                "2/3": "2/3",
            },
            height: {
                "150px": "9.375rem",
                "484px": "30.25rem",
            },
            width: {
                "150px": "9.375rem",
                "484px": "30.25rem",
            },
            borderWidth: {
                "2.5": "2.5px",
                "3": "3px"
            },
            padding: {
                "150px": "9.375rem"
            },
            colors: {
                primary: "#133f69",
                "cultured": "#F5F5F5",
                "cetacean-blue": "#05073C",
                "deep-carrot-orange": "#eb662b",
                "rose-white": "#fef7f4",
                "catskill-white": "#f1f5f9",
                "pale-sky": "#64748B",
                vn: {
                    red: "#da251d",
                    yellow: "#ffff00"
                },
                gemini: {
                    default: {
                        100: "#1fb6ff",
                    },
                    slate: {
                        150: "#e9eef5",
                    },
                    error: "#ff5724",
                    "error-focus": "#f03000",
                    warning: "#ff9800",
                    "warning-focus": "#e68200",
                    success: "#10b981",
                    "success-focus": "#059669",
                    info: "#0ea5e9",
                    "info-focus": "#0284c7",
                    secondary: "#f000b9",
                    "secondary-focus": "#bd0090",
                    primary: "#4f46e5",
                    "primary-focus": "#4338ca",
                    accent: "#5f5af6",
                    navy: {
                        50: "#e7e9ef",
                        100: "#c2c9d6",
                        200: "#a3adc2",
                        400: "#465675",
                        450: "#465675",
                        500: "#384766",
                        600: "#313e59",
                        900: "#192132",
                    },
                },
                app: {
                    spring: "#e6fdb1",
                    white: {
                        50: '#ffffff',
                        100: '#ffffff',
                        200: '#ffffff',
                        300: '#ffffff',
                        400: '#ffffff',
                        500: '#ffffff',
                        600: '#e8e8e8',
                        700: '#b5b5b5',
                        800: '#8c8c8c',
                        900: '#6b6b6b',
                    },
                    black: {
                        50: '#e9e9e9',
                        100: '#b9baba',
                        200: '#989898',
                        300: '#68696a',
                        400: '#4d4c4d',
                        500: '#1e1f20',
                        600: '#1b1c1d',
                        700: '#151617',
                        800: '#111112',
                        900: '#0d0d0d',
                    },
                    orange: {
                        50: '#ffede9',
                        100: '#ffcbba',
                        200: '#ffc23e',
                        300: '#ff9e6b',
                        400: '#ff794e',
                        500: '#ff6722',
                        600: '#e8411f',
                        700: '#b53e18',
                        800: '#8c3013',
                        900: '#6b250b',
                    }, green: {
                        50: '#f3f9ed',
                        100: '#dbf0c7',
                        200: '#cae3ac',
                        300: '#b1d786',
                        400: '#a2cf6e',
                        500: '#8bc34a',
                        600: '#7eb143',
                        700: '#638a35',
                        800: '#4c6b29',
                        900: '#3a521f',
                    }
                }
            },
            aria: {
                invalid: 'invalid="true"',
            },
            data: {
                "input-invalid": 'input-invalid="invalid"',
                "link-active": 'link-active="true"',
            },
            fontSize: {
                "px-13.5": "0.84375rem",
                "px-13": "0.8125rem",
                "px-12.5": "0.78125rem",
                "px-12": "0.75rem",
                "px-11.5": "0.71875rem",
                "px-11": "0.6875rem",
                "px-10.5": "0.65625rem",
                "px-10": "0.625rem",
                "px-9.5": "0.59375rem",
                "px-9": "0.5625rem",
                "px-8.5": "0.53125rem",
                "px-8": "0.5rem",
                "px-7.5": "0.46875rem",
                "px-7": "0.4375rem",
                "px-6.5": "0.40625rem",
                "px-6": "0.375rem",
                "px-5.5": "0.34375rem",
                "px-5": "0.3125rem",
                "px-4.5": "0.28125rem",
                "px-4": "0.25rem",
                "px-3.5": "0.21875rem",
                "px-3": "0.1875rem",
                "px-2.5": "0.15625rem",
                "px-2": "0.125rem",
                "px-1.5": "0.09375rem",
                "px-1": "0.0625rem",
            },
            lineHeight: {
                "3.5": "0.875rem",
                "px-13.5": "0.84375rem",
                "px-13": "0.8125rem",
                "px-12.5": "0.78125rem",
                "px-12": "0.75rem",
                "px-11.5": "0.71875rem",
                "px-11": "0.6875rem",
                "px-10.5": "0.65625rem",
                "px-10": "0.625rem",
                "px-9.5": "0.59375rem",
                "px-9": "0.5625rem",
                "px-8.5": "0.53125rem",
                "px-8": "0.5rem",
                "px-7.5": "0.46875rem",
                "px-7": "0.4375rem",
                "px-6.5": "0.40625rem",
                "px-6": "0.375rem",
                "px-5.5": "0.34375rem",
                "px-5": "0.3125rem",
                "px-4.5": "0.28125rem",
                "px-4": "0.25rem",
                "px-3.5": "0.21875rem",
                "px-3": "0.1875rem",
                "px-2.5": "0.15625rem",
                "px-2": "0.125rem",
                "px-1.5": "0.09375rem",
                "px-1": "0.0625rem",
            },
            fontFamily: {
                playfair: ["Playfair Display", "serif"],
                cabin: ["Cabin", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
