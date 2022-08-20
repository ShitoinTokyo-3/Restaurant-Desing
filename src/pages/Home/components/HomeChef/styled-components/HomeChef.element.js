import styled from "styled-components";

export const HomeChefContainer = styled.div`
    display: flex;
    padding: 3rem;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;
    }
`;

export const HomeChefLeft = styled.div`
    img {
        height: 500px;
    }

    @media (max-width: 768px) {
        display:flex;
        
        img {
            height: auto;
            width: 90%;
            margin: 0 auto;
        }
    }
`;
export const HomeChefRight = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 3rem;
    h3{
        font-size: 2.3rem;
        font-family: 'Montserrat';
        font-weight: bold;
    }
    strong{
        font-family: 'Courgette', cursive;
    }
    p{
        font-size: 1.3rem;
        font-family: 'Poppins';
        margin-top: 2rem;
    }
    span{
        font-family: 'Montserrat';
        font-size: 1.5rem;
        font-weight: bold;
    }
    @media (max-width: 768px) {
        width: 80%;
        margin-top: 2rem;
        padding: 0;
    }
`;