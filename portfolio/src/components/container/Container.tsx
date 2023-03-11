import * as C from "./style";

interface ContainerProps {
    children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
    return(
        <C.Container>
            {children}
        </C.Container>
    )
}

export default Container;