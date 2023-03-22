import styled from "styled-components";


export const SliderContainer = styled.div`
    width: 70rem;
    height: 15rem;
    margin: 0 auto;

    .slick-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-right: 1rem;
        border-radius: 10px;
    }
    .slick-dots li button:before {
        --dots-color: #fff;
        color: var(--dots-color);
    }

    .slick-dots {
        bottom: 0;
    }

    @media only screen and (max-width: 769px) {
        width: 80%;
        height: 160px;
        margin: 0 auto;
    }
`

export const SliderItem = styled.div`
    padding: 10px;
    @media screen and (max-width: 768px) {
        padding: 0;
        margin: 0 10px;
    }

`

export const SliderImg = styled.img`
    @media screen and (max-width: 768px) {
        width: 100px;
        height: 100px
    }
`

export const TitleProject = styled.h3`
    font-size: 20px;
    @media only screen and (max-width: 769px) {
        font-size: 10px;
    }
`

export const LinkContainer = styled.div`
    width: 70rem;
    margin: 0 auto;
    padding: 5px;

    a{
        text-decoration: none;
        color: white;
        border-bottom: 1px solid white;
    }

    a:hover {
        background-color: white;
        color: black;
        border-radius: 5px;
        padding: 4px;
    }

    @media only screen and (max-width: 769px) {
        width: 50%;

        a{
            font-size: 15px;
        }
    }
`