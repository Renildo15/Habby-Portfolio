import styled from "styled-components";


export const Section = styled.section`
`

export const SubTitleContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 30px;
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