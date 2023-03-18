import styled from "styled-components";
export const Header =  styled.header`
    background-image: url("https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 80vh;

`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50vh;

`

export const Title = styled.h1`
    width: 830px;
    margin: 0 auto;
    color: white;
`

export const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 40px;
`

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 20px;
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
`
export const ButtonContainer = styled.div`
    margin-top: 40px;

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
`