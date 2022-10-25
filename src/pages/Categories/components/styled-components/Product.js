import styled from "styled-components";

export const ContainerListProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 75vw;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ContainerProduct = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--Font-Family-Text);
    width: 250px;
    margin: 0 auto;
    cursor: default;
    margin-bottom: 2rem;
    
    .productImgAndPriceContainer{
        position: relative;
        width: 100%;
        height: auto;
    
        span{
            margin: 0 1.4rem;
            color: var(--Color-Text-White);
            font-size: 1.5rem;
            font-weight: 700;
        }
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    .productNameContainer{
        display: flex;
        padding-bottom: 1rem;
        align-items: center;
        text-align: center;
    }
    .productPriceContainer{
        position: absolute;
        bottom: .8rem;
        left: -1.6rem;
        background-color: var(--Color-Text-Error-Form);
        transform: rotate(40deg);
    }

    h3{
        font-size: 1.8rem;
        font-family: var(--Font-Family-Titles);
        margin: auto; 
    }

    .productDescription{
        width: 110%;
        margin: 0;
        text-align: center;
        padding: .8rem 0;
        align-self: center;
    }


    @media (max-width: 768px) {
        width: 100%;
        height: 200px;
        margin-bottom: 1rem;
        flex-direction: column;
        img {
            height: 400px;
        }

    }

`;