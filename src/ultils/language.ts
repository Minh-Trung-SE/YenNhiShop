import LANGUAGES, {Language} from "@src/constants/Language";
import {ReactNode} from "react";

function displayMessage (messages: Record<Language, ReactNode>, language: Language = LANGUAGES.VI): ReactNode {
    return messages[language]
}

export default displayMessage