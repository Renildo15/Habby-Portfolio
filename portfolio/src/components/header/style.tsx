import styled from "styled-components";
export const Header =  styled.header`
    background-image: url("https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 80vh;
    @media screen and (max-width: 768px) {
        height: 50vh;
        width: 59vh;
    }

`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50vh;

    @media screen and (max-width: 768px) {
        height: 40vh;
    }

`

export const Title = styled.p`
    width: 830px;
    margin: 0 auto;
    color: white;
    font-size: 30px;

    @media screen and (max-width: 1024px) {
        font-size: 20px;
        width: 100%;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        font-size: 24px;
        width: 400px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
        width: 250px;
    }
`

export const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 40px;

    @media screen and (max-width: 768px) {
        padding: 20px;
        justify-content: center;
    }
`

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 20px;

    @media screen and (max-width: 768px) {
        gap: 10px;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
`

export const ListItem = styled.li`
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    a{
        text-decoration: none;
        color: #fff;
    }
    a:hover{
        color: #65706F
    }

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`
export const ButtonContainer = styled.div`
    margin-top: 40px;

    @media screen and (max-width: 768px) {
        margin-top: 20px;
    }

`
export const Link = styled.a``
export const Button = styled.button`
    border: none;
    outline: none;
    height: 40px;
    width: 200px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;


    &:hover{
        background-color: #232422;
    }

    @media screen and (max-width: 768px) {
        height: 30px;
        width: 150px;
        font-size: 12px;
    }
`