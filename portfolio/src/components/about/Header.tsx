import * as C from "./style";
import Title from "./Title";
import NavBar from "./NavBar";

const Header = () =>{
    return(
        <C.Header>
            <NavBar/>
            <div>
                <Title/>
            </div>
        </C.Header>
    )
}

export default Header;