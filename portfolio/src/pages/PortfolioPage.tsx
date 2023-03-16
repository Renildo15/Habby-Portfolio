import Container from "../components/container/Container";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Skills from "../components/skils/Skills";
import Portfolio from "../components/portfolio/Portfolio";

const PortfolioPage = () =>{
    return(
        <Container>
            <Header/>
            <About/>
            <Skills/>
            <Portfolio/>
        </Container>
    )
}

export default PortfolioPage;