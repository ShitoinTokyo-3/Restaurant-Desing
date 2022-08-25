import styled from "styled-components";

export const HomeBannerImg = styled.div`
    position: relative;
    cursor: default;
    img {
        width: 100%;
    }

    @media (max-width: 769px) {
        display: none;
    }
`;


export const InfoBanner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background: transparent;
    display: flex;
`;

export const RellenoDiv = styled.div`
    height: 100%;
    width: 15%;
`;

export const TextBanner = styled.div`
    width: 71%;
    height: 80%;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    .TitleBanner {
        margin-top: 45px;
        font-size: 3rem;
        color: var(--Color-Text-White);
        font-family: var(--Font-Family-Titles);
        font-weight: bold;
        line-height: 1.1;
    }
    p{
        margin: auto;
        color: var(--Color-Text-White);

        font-family:var(--Font-Family-Text);
        font-size: 1.2rem;
        margin-top: 20px;
        width: 75%;
        margin-bottom:0;
    }
    span{
        font-family:var(--Font-Family-Text);
        color: var(--Color-Text-White);
        font-size: .9rem;
    }

    @media (max-width: 1100px) {
        width:78%;
        height: 90%;

        transform:scale(0.8);
    }
`;


export const ButtonBannerToForm = styled.button`
    background: var(--Color-Button-Blue);
    border: none;
    color: var(--Color-Text-White);
    font-family: var(--Font-Family-Titles);
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 18px;
    padding: 1rem 2rem;
    margin: 30px auto;
    margin-bottom: 15px;
    cursor: pointer;
    text-transform: uppercase;
    transition: var(--Transition-Button);

    &:hover {
        transform: translateY(-1px);
        background-color: var(--Color-Button-Blue-Hover);
    }
`;
