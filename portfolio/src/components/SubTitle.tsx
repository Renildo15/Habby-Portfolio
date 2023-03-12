import * as C from "./style";

interface SubTitleProps {
    subtitle : string
}

const SubTitle = ({subtitle}: SubTitleProps) => {
    return (
        <C.SubTitleContainer>
            <C.SubTitle>
                {subtitle}
            </C.SubTitle>
        </C.SubTitleContainer>
    )
}

export default SubTitle;
