import * as C from "./style";

interface SectionProps {
    children: React.ReactNode
}

const Section = ({children}: SectionProps) => {
    return (
        <C.Section>
            {children}
        </C.Section>
    )
}

export default Section;
