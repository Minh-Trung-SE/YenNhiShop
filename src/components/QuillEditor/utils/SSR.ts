import {randomUUID} from "crypto";
import {JSDOM} from "jsdom";

export type DOMJsonObject = {
    type: string;
    value?: string | null;
    attributes: Record<string, any>
    elements: DOMJsonObject[];
}


export function ssrDOMJsonObjectToHtml(object: DOMJsonObject, document:Document   ): Node {

    if (object.type === "#text") {
        return document.createTextNode(object.value!)
    }

    const element = document.createElement(object.type);

    for (const key in object.attributes) {
        element.setAttribute(key, object.attributes[key]);
    }

    object.elements.forEach(
        (child: DOMJsonObject) => {
            element.appendChild(ssrDOMJsonObjectToHtml(child, document));
        }
    )


    return element;
}


export function ssrObjectToHtml(object: DOMJsonObject[]): string {
    const uuid = randomUUID()
    const DOM = new JSDOM(`<div id=${uuid.toString()} ></div>`)

    const root = DOM.window.document.getElementById(uuid.toString())!
    const document = DOM.window.document

    object.forEach(
        (child: DOMJsonObject) => {
            root.appendChild(ssrDOMJsonObjectToHtml(child, document));
        }
    )

    return root.innerHTML
}

