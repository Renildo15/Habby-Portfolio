import Container from "../components/container/Container";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Skills from "../components/skils/Skills";
import Portfolio from "../components/portfolio/Portfolio";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";

const PortfolioPage = () =>{
    return(
        <Container>
            <Header/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
        </Container>
    )
}

export default PortfolioPage;