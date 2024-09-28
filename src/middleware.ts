import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {isUndefined} from "lodash";
import LANGUAGES from "@src/constants/Language";

export function middleware(request: NextRequest) {
    const {nextUrl: {pathname}} = request
    const languagePath = pathname.split("/", 2).at(-1)
    const isLanguagePath = isUndefined(languagePath) ? false :  ["vi", "en"].includes(languagePath)
    const language = isLanguagePath ? languagePath! : request.cookies.get("language")?.value ?? LANGUAGES.VI

    const response = NextResponse.next(
        {
            headers: {
                "language": language
            }
        }
    )

    if (isUndefined(request.cookies.get(language))){
        response.cookies.set(
            "language",
            language,
            {
                path: "/"
            }
        )
    }

    if (isLanguagePath) {
        const rewrite = request.nextUrl.clone();
        rewrite.pathname = pathname.replace(`/${language}`, "")
        return NextResponse.rewrite(rewrite, response)
    }

    return response
}

export const config = {
    matcher: [
        '/((?!images|logo|_next|background).*)',
    ],
}