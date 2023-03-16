import styled from "styled-components";


export const SliderContainer = styled.div`
    width: 80rem;
    height: 15rem;
    margin: 0 auto;

    .slick-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-right: 1rem;
    }
    .slick-dots li button:before {
        --dots-color: #fff;
        color: var(--dots-color);
    }

    .slick-dots {
        bottom: 0;
    }
`

export const SliderItem = styled.div`
    padding: 10px;

`

export const SliderImg = styled.img``