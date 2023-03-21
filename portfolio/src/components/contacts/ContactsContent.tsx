import * as C from "./style"

interface ContactsContentProps {
    icon: React.ReactNode
    contentTitle: String,
    contentSpan: String | React.ReactNode
}

const ContactsContent = ({contentTitle, contentSpan, icon }:ContactsContentProps) => {
    return (
        <C.ContactsContent>
            <C.ContactsTitle>
                {icon}
                <h4>{contentTitle}:</h4>
            </C.ContactsTitle>
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
