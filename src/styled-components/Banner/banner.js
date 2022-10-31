import styled from "styled-components";

export const HomeBannerImg = styled.div`
    position: relative;
    cursor: default;
    margin-bottom: -.3rem;
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
    margin: 50px auto;
    margin-bottom: 15px;
    cursor: pointer;
    text-transform: uppercase;
    transition: var(--Transition-Button);

    &:hover {
        transform: translateY(-1px);
        background-color: var(--Color-Button-Blue-Hover);
    }
`;

export const ServicesBannerContainer = styled.div`
    position: relative;
    cursor: default;
    margin-bottom: 2rem;

    #bannerImg {
        min-height: 350px;
        object-fit: cover;
        width: 100%;
    }
`;

export const InfoServicesBanner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
`;

export const TextServicesBanner = styled.div`
    font-family: var(--Font-Family-Titles);

    #LogoServicesbanner{
        width: 28rem;
    }
`;

export const ListServicesContainer = styled.ul`
    display: flex;
    flex-direction: column;
    margin: auto;
    list-style: none;
    align-items: center;
    color: var(--Color-Text-White);
    font-size: 1.5rem;
    li{
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }
    span{
        margin-left: 10px;
        margin-right: 0;
        font-size: 1.1rem;
    }
`

export const ButtonBannerServices = styled.button`
    background: var(--Color-Button-Blue);
    border: none;
    color: var(--Color-Text-White);
    font-family: var(--Font-Family-Titles);
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 18px;
    padding: .8rem 2rem;
    cursor: pointer;
    text-transform: uppercase;
    transition: var(--Transition-Button);
    margin-top: 10px;

    &:hover {
        transform: translateY(-1px);
        background-color: var(--Color-Button-Blue-Hover);
    }
`;

export const ButtonStepsToForm = styled.button`
    background: var(--Color-Button-Blue);
    border: none;
    color: var(--Color-Text-White);
    font-family: var(--Font-Family-Titles);
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 18px;
    padding: 1rem 2rem;
    margin: 20px auto;
    margin-bottom: 4rem;
    cursor: pointer;
    text-transform: uppercase;
    transition: var(--Transition-Button);

    &:hover {
        transform: translateY(-1px);
        background-color: var(--Color-Button-Blue-Hover);
    }
`;