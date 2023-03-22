import Section from "../Section";
import SubTitle from "../SubTitle";
import ContactsContainer from "./ContactsContainer";
import ContactsContent from "./ContactsContent";
import {MdEmail} from "react-icons/md";
import {BsTelephoneFill} from "react-icons/bs"
import {IoShareSocialSharp} from "react-icons/io5"
import SocialMedia from "./SocialMedia";

const Contacts = () =>{
    return(
        <Section id_section="contacts">
            <SubTitle subtitle="Contacts"/>
            <ContactsContainer>
                <ContactsContent icon={<MdEmail/>} contentTitle="Email" contentSpan="renildorabi22@gmail.com"/>
                <ContactsContent icon={<BsTelephoneFill/>} contentTitle="Telephone number" contentSpan="+55 (84) 9 9927-6039"/>
                <ContactsContent icon={<IoShareSocialSharp/>} contentTitle="Social media" contentSpan={<SocialMedia/>}/>
            </ContactsContainer>
        </Section>
    )
}

export default Contacts;