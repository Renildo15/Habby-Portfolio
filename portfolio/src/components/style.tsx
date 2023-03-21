import styled from "styled-components";


export const Section = styled.section`
    height: 25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 768px) {
        height: 75vh;
        width: 59vh;
    }
    @media screen and (max-width: 1024px) {
        height: 75vh;
        width: 59vh;
    }
`

export const SubTitleContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 30px;

    @media (max-width: 768px) {
        width: 80%;
        padding: 20px;
    }
`

export const SubTitle = styled.h2`
    font-size: 30px;
    position: relative;
    display: inline-block;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 5px;
        bottom: -5px;
        left: 0;
        background-color: #65706F; /* cor do underline */
        border-radius: 10px; /* arredondar as bordas do underline */
    }
`