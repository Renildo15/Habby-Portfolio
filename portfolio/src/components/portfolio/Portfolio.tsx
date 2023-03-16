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
    slidesToScroll: 1
};
const Portfolio = () => {
    return (
        <Section>
            <SubTitle subtitle="Portfolio"/>
            <C.SliderContainer>
                <Slider {...settings}>
                    <C.SliderItem>
                        <img src={MangaCats} alt="mangacats" />
                    </C.SliderItem>
                    <C.SliderItem>
                        <img src={NihongoGaido} alt="mangacats" />
                    </C.SliderItem>
                    <C.SliderItem>
                        <img src={GestorLab} alt="mangacats" />
                    </C.SliderItem>
                    <C.SliderItem>
                        <img src={Learn} alt="mangacats" />
                    </C.SliderItem>
                    <C.SliderItem>
                        <img src={Music} alt="mangacats" />
                    </C.SliderItem>
                    <C.SliderItem>
                        <img src={Netflix} alt="mangacats" />
                    </C.SliderItem>
                    <C.SliderItem>
                        <img src={WebDesign} alt="mangacats" />
                    </C.SliderItem>
                    <C.SliderItem>
                        <img src={Biblioteca} alt="mangacats" />
                    </C.SliderItem>
                </Slider>
            </C.SliderContainer>
        </Section>
    )
}

export default Portfolio;
