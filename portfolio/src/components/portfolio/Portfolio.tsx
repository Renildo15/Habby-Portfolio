import Section from "../Section";
import SubTitle from "../SubTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as C from "./style";

import MangaCats from "../../assets/imgs/MangaCats.jpg";
import NihongoGaido from "../../assets/imgs/Nihongogaido.jpg";
import GestorLab from "../../assets/imgs/Gestorlab.jpg";
import Learn from "../../assets/imgs/Learn.jpg";
import Music from "../../assets/imgs/Music.jpg";
import Netflix from "../../assets/imgs/Netflix.jpg";
import WebDesign from "../../assets/imgs/webdesign.jpg";
import Biblioteca from "../../assets/imgs/Biblioteca.jpg";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                dots: true,
            },
        },
    ],
};
const Portfolio = () => {
    return (
        <Section>
            <SubTitle subtitle="Portfolio"/>
            <C.SliderContainer>
                <Slider {...settings} autoplay={true} autoplaySpeed={2000}>
                    <C.SliderItem>
                        <C.SliderImg src={MangaCats} alt="mangacats" />
                        <C.TitleProject>Manga Cats</C.TitleProject>
                    </C.SliderItem>
                    <C.SliderItem>
                        <C.SliderImg src={NihongoGaido} alt="nihongogaido" />
                        <C.TitleProject>Nihongo Gaido</C.TitleProject>
                    </C.SliderItem>
                    <C.SliderItem>
                        <C.SliderImg src={GestorLab} alt="gestorlab" />
                        <C.TitleProject>Gestor Lab</C.TitleProject>
                    </C.SliderItem>
                    <C.SliderItem>
                        <C.SliderImg src={Learn} alt="learn" />
                        <C.TitleProject>Learn online from home</C.TitleProject>
                    </C.SliderItem>
                    <C.SliderItem>
                        <C.SliderImg src={Music} alt="music" />
                        <C.TitleProject>Music landing page</C.TitleProject>
                    </C.SliderItem>
                    <C.SliderItem>
                        <C.SliderImg src={Netflix} alt="netflix" />
                        <C.TitleProject>Netflix page clone</C.TitleProject>
                    </C.SliderItem>
                    <C.SliderItem>
                        <C.SliderImg src={WebDesign} alt="mangacats" />
                        <C.TitleProject>Web design landing page</C.TitleProject>
                    </C.SliderItem>
                    <C.SliderItem>
                        <C.SliderImg src={Biblioteca} alt="Toshokan" />
                        <C.TitleProject>Biblioteca - Toshokan</C.TitleProject>
                    </C.SliderItem>
                </Slider>
            </C.SliderContainer>
            <C.LinkContainer>
                <a href="https://github.com/Renildo15?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <span>View others project in Github</span>
                </a>
            </C.LinkContainer>
        </Section>
    )
}

export default Portfolio;
