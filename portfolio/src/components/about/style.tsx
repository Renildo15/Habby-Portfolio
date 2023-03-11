import styled from "styled-components";
export const Header =  styled.header`
    background-image: url("https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 50vh;

`

export const Title = styled.h1``

export const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
    color: #fff;

    &:hover{
        color: #ff0
    }
`