import styled from "styled-components";

export const HomeBannerImgRes = styled.div`
    position: relative;
    margin-bottom: -1.3rem;
    img {
        width: 100%;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;


export const InfoBannerRes = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60%;
    height: 85%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;


export const TextBannerRes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 .8rem;
    .TitleBanner {
        color: var(--Color-Text-White);
        font-family: var(--Font-Family-Titles);
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 1;
    }
    p{
        color: var(--Color-Text-White);
        font-family:var(--Font-Family-Text);
        font-size: .9rem;
        margin-top: 20px;
        width: 85%;
    }
    span{
        font-family:var(--Font-Family-Text);
        color: var(--Color-Text-White);
        font-size: .55rem;
    }
`;


export const ButtonBannerToFormRes= styled.button`
    background: var(--Color-Button-Blue);
    border: none;
    color: var(--Color-Text-White);
    font-family: var(--Font-Family-Titles);
    font-size: .85rem;
    font-weight: bold;
    border-radius: 10px;
    padding: .5rem 1.2rem;
    text-transform: uppercase;
    margin: 20px auto;
    margin-bottom: 7px;
    cursor: pointer;
    transition: var(--Transition-Button);

    &:hover {
        transform: translateY(-1px);
        background-color: var(--Color-Button-Blue-Hover);
    }
`;