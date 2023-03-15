import Section from "../Section"
import SubTitle from "../SubTitle";
import IconsDiv from "./IconsDiv";
import * as C from "./style";
import {DiReact} from "react-icons/di";
import {DiHtml5} from "react-icons/di";
import {DiCss3} from "react-icons/di";
import {DiJavascript} from "react-icons/di";
import {DiNodejsSmall} from "react-icons/di";
import {DiPython} from "react-icons/di";
import {DiDjango} from "react-icons/di";
import {DiBootstrap} from "react-icons/di";

const Skills = () =>{
    return(
        <Section>
            <SubTitle subtitle="Skills"/>
            <C.IconsContainer>
                <IconsDiv skill="React">
                    <DiReact/>
                </IconsDiv>
                <IconsDiv skill="HTML5">
                    <DiHtml5/>
                </IconsDiv>
                <IconsDiv skill="CSS3">
                    <DiCss3/>
                </IconsDiv>
                <IconsDiv skill="JavaScript">
                    <DiJavascript/>
                </IconsDiv>
                <IconsDiv skill="NodeJS">
                    <DiNodejsSmall/>
                </IconsDiv>
                <IconsDiv skill="Bootstrap">
                    <DiBootstrap/>
                </IconsDiv>
                <IconsDiv skill="Python">
                    <DiPython/>
                </IconsDiv>
                <IconsDiv skill="Django">
                    <DiDjango/>
                </IconsDiv>
            </C.IconsContainer>
        </Section>
    )
}

export default Skills;