import * as C from "./style";

interface IconsDivProps {
    children: React.ReactNode,
    skill: String
}

const IconsDiv = ({children, skill}:IconsDivProps) =>{
    return(
        <C.IconsContent>
            {children}
            {skill}
        </C.IconsContent>
    )
}

export default IconsDiv;