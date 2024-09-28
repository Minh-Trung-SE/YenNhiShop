"use client"
import {isEmpty, isUndefined} from "lodash";


const getClientCookieLanguage: ( name?: string) => string | undefined = ( name: string = "language") => {
    if(isUndefined(document)){
        return
    }

    if(isEmpty(document.cookie)){
        return
    }

    const cookies =document.cookie.split("; ").reduce<Record<string, string>>(
        (cookies,cookie ) => {
            const [key, value] = cookie.split("=")
            cookies[key] = value
            return cookies
        },
        {}
    )
    return cookies[name] ?? "vi"
}

export default getClientCookieLanguage