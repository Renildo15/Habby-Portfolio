import * as C from "./style";
import Title from "./Title";
import NavBar from "./NavBar";
import Button from "./Button";

const Header = () =>{
    return(
        <C.Header>
            <NavBar/>
            <C.HeaderContent>
                <Title/>
                <Button/>
            </C.HeaderContent>
        </C.Header>
    )
}

export default Header;