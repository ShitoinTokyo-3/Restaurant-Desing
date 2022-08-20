import styled from "styled-components";


export const GrayContainer = styled.div`
    background-color: #E6E6E6;
    padding: 40px;
    text-align: center;
    

`;

export const BolderLetter = styled.p`
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
`;

export const BigLetter = styled.p`
    font-family: 'Roboto', sans-serif;
    padding: 2rem 0;
    text-align: center;
    font-size: 1.8rem;
`;

export const TextMain = styled.div`
    text-align: center;
    margin: auto;
    padding: 2rem 1rem;
    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
    }
    p {
        margin-top: 0.7rem;
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
    }
`;


export const ContainerModalChildren = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    h1{
        font-size: 35px;
        font-weight: 700;
        margin-bottom: 20px;
        font-family: 'Montserrat', sans-serif;
        align-self: start;
    }

    p{
        font-size: 18px;
        margin-bottom: 20px;
    }
    
    img{
        width: 100%;
        vertical-align: top;
        border-radius: 3px;
    }
`;

export const ContainerModal2ChildrenRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ContainerTextModal = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 100%;
    margin-bottom: 15px;
`;


export const ContainerModalChildrenRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1{
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 20px;
        font-family: 'Montserrat', sans-serif;
        align-self: start;
    }
    p {
        font-family: 'Roboto', sans-serif;
        margin-bottom: 15px;
        
    }
`;