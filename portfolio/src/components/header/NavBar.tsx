import * as C from "./style";
import { HashLink as Link } from "react-router-hash-link";


const NavBar = () => {
    return (
        <C.NavBar>
            <C.List>
                <C.ListItem>
                    <Link to="#about" smooth>About me</Link>
                </C.ListItem>
                <C.ListItem>
                    <Link to="#skills" smooth>My skills</Link>
                </C.ListItem>
                <C.ListItem>
                    <Link to = "#portfolio" smooth>Portfolio</Link>
                </C.ListItem>
                <C.ListItem>
                    <Link to = "#contacts" smooth>Contacts</Link>
                </C.ListItem>
            </C.List>
        </C.NavBar>
    )
}

export default NavBar;
