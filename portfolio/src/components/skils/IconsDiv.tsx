import * as C from "./style";

interface IconsDivProps {
    children: React.ReactNode,
    skill: String
}

const IconsDiv = ({children, skill}:IconsDivProps) =>{
    return(
        <C.IconsContent>
            {children}
            <span>{skill}</span>
        </C.IconsContent>
    )
}

export default IconsDiv;