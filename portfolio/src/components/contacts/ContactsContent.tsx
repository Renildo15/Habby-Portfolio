import { ReactNode } from "react"
import * as C from "./style"

interface ContactsContentProps {
    icon: React.ReactNode
    contentTitle: String,
    contentSpan: String | React.ReactNode
}

const ContactsContent = ({contentTitle, contentSpan, icon }:ContactsContentProps) => {
    return (
        <C.ContactsContent>
            <h4>{icon} {contentTitle}</h4>
            {typeof contentSpan === "string" ? (
                <span>
                    {contentSpan}
                </span>
            ):(
                contentSpan
            )}
        </C.ContactsContent>
    )
}

export default ContactsContent;
