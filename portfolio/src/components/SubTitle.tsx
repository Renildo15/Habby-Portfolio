interface SubTitleProps {
    subtitle : string
}

const SubTitle = ({subtitle}: SubTitleProps) => {
    return (
        <h3>
            {subtitle}
        </h3>
    )
}

export default SubTitle;
