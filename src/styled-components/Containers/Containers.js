import styled from "styled-components";


export const GrayContainer = styled.div`
    background-color: var(--Color-Container-Gray-Light);
    padding: 40px;
    text-align: center;
    padding-top: 10px;

    @media (max-width: 768px) {
        padding: 0;
        padding-top: 2rem;
    }

`;

export const GrayContainerAdmin = styled.div`
    background-color: var(--Color-Container-Gray-Light);
    padding: 40px;
    text-align: center;
    padding-top: 10px;

    @media (max-width: 768px) {
        padding: 0;
        padding-top: 2rem;
    }
`;

export const WhiteContainer = styled.div`
    background-color: var(--Color-Background-White);
    padding: 100px 40px;
    margin: 0 3px;


    h1{
        font-family: var(--Font-Family-Titles);
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
    p{
        font-family: var(--Font-Family-Text);
    }
`;

export const GrayContainervariant = styled.div`
    background-color: var(--Color-Container-Gray);
    padding: 40px;
    text-align: center;
    padding-top: 10px;

    @media (max-width: 768px) {
        padding: 0;
        padding-top: 2rem;
    }
`;

export const BolderLetter = styled.p`
    text-align: center;
    font-family: var(--Font-Family-Titles);
    text-align: center;
    font-size: 2.3rem;
    font-weight: 900;
    width: 65vw;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 10px;


    @media (max-width: 768px) {
        font-size: 1.7rem;
    }
`;

export const BigLetter = styled.p`
    font-family: var(--Font-Family-Text);
    padding: 2rem 0;
    text-align: center;
    font-size: 1.6rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const TextMain = styled.div`
    text-align: center;
    margin: auto;
    padding: 0 1rem;
    padding-bottom: 1rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    h3 {
        font-family: var(--Font-Family-Titles);
        font-size: 2rem;
    }
    p {
        width: 75vw;
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

export const TextMainCategories = styled.div`
    text-align: center;
    margin: auto;
    padding: 0 1rem;
    padding-bottom: 1rem;
    margin-top: 4rem;
    margin-bottom: 2.5rem;
    h3 {
        font-family: var(--Font-Family-Titles);
        font-size: 2rem;
        text-transform: uppercase;
    }
    p {
        width: 75vw;
        max-width: 900px;
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

export const ContainerTextDescriptionServices = styled.div`
    margin:auto;
    width:75vw;
    font-family: var(--Font-Family-Text);
    font-size: 1rem;
    margin-bottom: 2rem;
    h1,h2,h3,h4,h5,h6{
        font-family: var(--Font-Family-Titles);
    }
`;

export const ContainerModalChildrenServices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    

    h1{
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 20px;
        font-family: var(--Font-Family-Titles);
    }
    p {
        font-family: var(--Font-Family-Text);
        margin-bottom: 15px;
        
    }
`;
