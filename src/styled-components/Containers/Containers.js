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

export const TextUpperCarrousel = styled.div`
    text-align: center;
    font-family: var(--Font-Family-Titles);
    text-align: center;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 1.2rem;

    h2{
        font-size: 2rem;
        font-weight: 900;
    }
    p{
        margin-top: 10px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 5px;

        span{
            margin:0;
            font-size: 1.2rem;
            margin-top: 5px;
            display: flex;
            align-items: center;
        }
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        width: 90vw;

        h2{
            font-size: 1.7rem;
        }

        div{
            span{
            font-size: 1rem;
            }
        }
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

export const ContainerDescriptionServices = styled.div`
    margin:auto;
    width:75vw;
    font-family: var(--Font-Family-Text);
    font-size: 1rem;
    margin-bottom: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    img{
        max-width: 450px;
    }

    h1,h2,h3,h4,h5,h6{
        font-size: 2.3rem;
        font-family: var(--Font-Family-Titles);
        padding: 0.5rem 0;
    }

    div{
        padding: 4rem;
        width: 500px;
        box-sizing: border-box;

    }

    @media (max-width: 768px) {
        flex-direction: column;


        div{
            padding: 3rem 1rem;
            width: 100%;
        }
        img{
            max-width: 100%;
        }
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

export const ContainerFlexBottom = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem 0;
    justify-content: space-evenly;
`;


export const ContainerExamples = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 2rem auto;
    width: 100%;
    max-width: 1000px;
    font-family: var(--Font-Family-Text);


    h2{
        font-size: 2.3rem;
        text-align: center;
        font-family: var(--Font-Family-Titles);
        text-transform: uppercase;
        margin-bottom: 2rem;
    }
`;

export const Accordion = styled.div`
    text-align: left;
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
    font-family: var(--Font-Family-Text);
    display: flex;
    flex-direction: column;
    align-items: center;

    .accordion-toggle{
        width: 75%;
        height: 0px;
        padding: 1rem 2rem;
        opacity: 0;
        transition:  
        opacity 0.3s ease-in-out,
        height 0.3s 0.3s ease-in-out;
        background-color: var(--Color-Container-Gray-Light);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: .5rem;
        border-radius: 5px;
        line-height: 1.5rem;


    }
    .animated {
        opacity: 1;
        transition:  
        height 0.3s ease-in-out,
        opacity 0.3s 0.3s ease-in-out;
    }

`;

export const ContainerExamplesRow = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: .5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;

    h3{
        padding-left: 1rem;
    }
`;

export const ContainerAccordion = styled.div`

    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
    font-family: var(--Font-Family-Text);
    display: flex;
    flex-direction: column;
    align-items: center;
    .container-accordion-down{
        margin-bottom: 1rem;
        margin-top: 0;
        transition: margin-bottom 0.3s ease-in-out;
    }
    .container-accordion-up{
        margin-top: -1rem;
        transition: margin-bottom 0.3s ease-in-out;
    }
`;