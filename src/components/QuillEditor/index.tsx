"use client";
import {DOMJsonObject, htmlToDomObject} from "@src/components/QuillEditor/utils/Convert";
import {isFunction, isUndefined} from "lodash";
import Quill from 'quill';
import Delta from "quill-delta"; // Import Delta để quản lý kiểu dữ liệu của nội dung
import {FC, HTMLAttributes, memo, useEffect, useRef} from 'react';
import 'quill/dist/quill.snow.css';
import {twMerge} from "tailwind-merge"; // Import CSS của Quill

type QuillEditorProps = HTMLAttributes<HTMLDivElement> & {
    contents?: Delta;
    onContentChange?: (contents: { delta: Delta, json: DOMJsonObject[] }) => void;
};


const QuillEditor: FC<QuillEditorProps> = ({contents, onContentChange, className, ...props}) => {
    const quillRef = useRef<Quill>()
    const editorRef = useRef<HTMLDivElement | null>(null)

    // const handleUploadImage = useCallback(
    //     (event: ChangeEvent<HTMLInputElement>) => {
    //         console.log(event.currentTarget.files)
    //     }, []
    // )

    useEffect(() => {
        if (quillRef.current) {
            return
        }
        const quill = new Quill(
            editorRef.current ?? document.body,
            {
                theme: 'snow',
                modules: {
                    toolbar: {
                        container: [
                            ['blockquote'],
                            [{header: 1}, {header: 2}],
                            [{indent: '-1'}, {indent: '+1'}],
                            ['link', 'image', 'video', 'formula'],
                            ['bold', 'italic', 'underline', 'strike'],
                            [{list: 'ordered'}, {list: 'bullet'}],
                            [{script: 'sub'}, {script: 'super'}],
                            [{direction: 'rtl'}],
                            [{size: ['small', false, 'large', 'huge']}],
                            [{header: [1, 2, 3, 4, 5, 6, false]}],
                            [{color: []}, {background: []}],
                            [{font: []}],
                            [{align: []}],
                            ['clean'],
                        ],
                        handlers: {
                            'image': function () {
                                const input = document.createElement("input")
                                input.setAttribute("hidden", "true")
                                input.setAttribute("type", "file")
                                input.setAttribute("accept", "image/*")
                                input.click()


                            }
                        }
                    }
                },
            }
        )

        if (!isUndefined(contents)) {
            quill.setContents(contents)
        }

        if (isFunction(onContentChange)) {
            quill.on(
                "text-change",
                function () {
                    const nodes = Array.from(
                        quill.root.children
                    ).map(
                        (node) => htmlToDomObject(node as HTMLElement)
                    )

                    onContentChange(
                        {
                            delta: quill.getContents(),
                            json: nodes
                        }
                    )
                }
            )
        }
        quillRef.current = quill
    }, [contents, onContentChange]);


    return (
        <div
            className={
                twMerge(
                    "w-full rounded h-fit",
                    className
                )
            }
            {...props}
        >
            <div ref={editorRef}></div>
        </div>
    )
};

export default memo(QuillEditor)
