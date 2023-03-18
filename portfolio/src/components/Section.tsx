import * as C from "./style";

interface SectionProps {
    children: React.ReactNode
    id_section: string
}

const Section = ({children, id_section}: SectionProps) => {
    return (
        <C.Section id = {id_section}>
            {children}
        </C.Section>
    )
}

export default Section;
