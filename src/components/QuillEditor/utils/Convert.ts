export type DOMJsonObject = {
    type: string;
    value?: string | null;
    attributes: Record<string, any>
    elements: DOMJsonObject[];
}


export function domObjectToHtml(object: DOMJsonObject   ): Node {

    if (object.type === "#text") {
        return document.createTextNode(object.value!)
    }

    const element = document.createElement(object.type);

    for (const key in object.attributes) {
        element.setAttribute(key, object.attributes[key]);
    }

    object.elements.forEach(
        (child: DOMJsonObject) => {
            element.appendChild(domObjectToHtml(child));
        }
    )


    return element;
}


export function htmlToDomObject(element: HTMLElement): DOMJsonObject {

    if (element.nodeName === "#text") {
        return {
            type: element.nodeName,
            value: element.nodeValue,
            attributes: {},
            elements: [],
        }
    }

    const node: DOMJsonObject = {
        type: element.tagName?.toLowerCase(),
        attributes: {},
        elements: [],
    }

    for (const attribute of Array.from(element.attributes ?? [])) {
        node.attributes[attribute.name] = attribute.value;
    }

    for (const child of Array.from(element.childNodes.values())) {
        node.elements.push(htmlToDomObject(child as HTMLElement));
    }

    return node;
}




