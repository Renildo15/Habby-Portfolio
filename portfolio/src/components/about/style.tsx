import styled from "styled-components";

export const TextContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 20px;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
    @media screen and (max-width: 1024px) {
        width: 100%;
        padding: 10px;
    }
`

export const Text = styled.p`
    text-align: justify;
    text-indent: 50px;

`