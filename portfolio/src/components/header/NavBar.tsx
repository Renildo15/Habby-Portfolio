import * as C from "./style";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <C.NavBar>
            <C.List>
                <C.ListItem>
                    <Link to="#about">About me</Link>
                </C.ListItem>
                <C.ListItem>
                    <Link to="#skills">My skills</Link>
                </C.ListItem>
                <C.ListItem>
                    <Link to = "#portfolio">Portfolio</Link>
                </C.ListItem>
                <C.ListItem>
                    <Link to = "#contacts">Contacts</Link>
                </C.ListItem>
            </C.List>
        </C.NavBar>
    )
}

export default NavBar;
