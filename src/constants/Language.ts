const LANGUAGES = {
    VI: "vi",
    EN: "en"
} as const

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];
export default LANGUAGES