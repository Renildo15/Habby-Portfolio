import * as C from "./style";

interface ContactsContainerProps {
    children: React.ReactNode
}

const ContactsContainer = ({children}:ContactsContainerProps) =>{
    return(
        <C.ContactsContainer>
            {children}
        </C.ContactsContainer>
    )
}

export default ContactsContainer;