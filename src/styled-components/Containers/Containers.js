import styled from "styled-components";


export const GrayContainer = styled.div`
    background-color: var(--Color-Container-Gray-Light);
    padding: 40px;
    text-align: center;

`;

export const BolderLetter = styled.p`
    text-align: center;
    font-family: var(--Font-Family-Titles);
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const BigLetter = styled.p`
    font-family: var(--Font-Family-Text);
    padding: 2rem 0;
    text-align: center;
    font-size: 1.8rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const TextMain = styled.div`
    text-align: center;
    margin: auto;
    padding: 2rem 1rem;
    padding-bottom: 3rem;
    h3 {
        font-family: var(--Font-Family-Titles);
        font-size: 2rem;
    }
    p {
        width: 70vw;
        margin: auto;
        margin-top: 0.9rem;
        font-family: var(--Font-Family-Text);
        font-size: 1.2rem;
    }

    @media (max-width: 768px) {
        h3 {
            line-height: 1;
            width:80vw;
            margin: auto;
            font-size: 1.7rem;
        }
        p{
          font-size: 0.9rem;
        }
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
        font-family: var(--Font-Family-Titles);
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
    font-family: var(--Font-Family-Text);
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
        font-family: var(--Font-Family-Titles);
        align-self: start;
    }
    p {
        font-family: var(--Font-Family-Text);
        margin-bottom: 15px;
        
    }
`;