import styled from "styled-components";


export const ContactsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    width: 80rem;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 20rem;
        gap: 10px;
    }
        
`

export const ContactsContent = styled.div`
    width: 70rem;

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`

export const ContactsTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    h4, svg{
        font-size: 20px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 768px) {
        h4, svg{
        font-size: 15px;
        margin-bottom: 10px;
        
    }
    }
`

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    a svg{
        font-size: 20px;
        color: white;
    }
    a:hover svg {
        transform: scale(1.2);
    }
`