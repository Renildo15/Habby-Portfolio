import {GrInstagram} from "react-icons/gr"
import {GrLinkedin} from "react-icons/gr";
import * as C from "./style";

const SocialMedia = () => {
    return (
        <C.SocialMedia>
            <a href="https://www.instagram.com/habby.valle/" target="_blank">
                <GrInstagram/>
            </a>
            <a href="https://www.linkedin.com/in/renildo-rabi-vale-dos-santos-992127201/" target="_blank">
                <GrLinkedin/>
            </a>
        </C.SocialMedia>
    )
}

export default SocialMedia;
