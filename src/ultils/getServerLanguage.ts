import {cookies, headers} from "next/headers";
import LANGUAGES, {Language} from "@src/constants/Language";

const getServerLanguage: (name?: string) => Language = (name: string = "language") => {
    return headers().get("language") as Language ?? cookies().get(name)?.value as Language ?? LANGUAGES.VI
}

export default getServerLanguage