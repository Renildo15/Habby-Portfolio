import styled from "styled-components";


export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 55%;
    margin: 0 auto;
    gap: 15px;
    padding: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 40px;
    }


`
export const IconsContent = styled.div`
    background-color: #65706F;
    width: 10rem;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;

    > svg {
        fill: #ffff;
        width: 50px;
        height: 50px;
        margin-bottom: 0.5rem;
    }
    
    span {
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        margin: 0;
    }

    &:hover {
        transform: scale(1.1);
    }


    @media screen and (max-width: 768px){
        width:50px;
        height: 2rem;
        border-radius: 0;

        > svg {
            width: 20px;
            height: 20px;
            margin-bottom: 0;
        }

        span {
            font-size: 4px;
        }
    }


`