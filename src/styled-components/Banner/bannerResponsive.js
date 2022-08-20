import styled from "styled-components";

export const HomeBannerImgRes = styled.div`
    position: relative;
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
    height: 90%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const TextBannerRes = styled.div`
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 .8rem;
    .TitleBanner {
        color: #fff;
        font-family: "Montserrat";
        font-weight: bold;
        font-size: 1rem;
    }
    p{
        color: #fff;
        font-family:'Poppins';
        font-size: .7rem;
        margin-top: 20px;
    }
`;


export const ButtonBannerToFormRes= styled.button`
    background: #5810E8;
    border: none;
    color: #fff;
    font-family: "Montserrat";
    font-size: .8rem;
    font-weight: bold;
    border-radius: 10px;
    padding: .5rem .5rem;
    margin: 20px auto;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: translateY(-1px);
        background-color: #441f8b;

    }
`;