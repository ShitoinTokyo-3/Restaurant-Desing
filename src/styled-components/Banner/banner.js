import styled from "styled-components";

export const HomeBannerImg = styled.div`
    position: relative;
    img {
        width: 100%;
    }

    @media (max-width: 1050px) {
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
    width: 20%;
`;

export const TextBanner = styled.div`
    width: 71%;
    height: 85%;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    .MessageFriend {
        font-size: 2.6rem;
        font-family: "Montserrat";
        font-weight: 500;
        color: #fff;
        line-height: 2.8rem;
        align-self: flex-end;
    }
    .TitleBanner {
        margin-top: 45px;
        font-size: 2.5rem;
        color: #fff;
        font-family: "Montserrat";
        font-weight: bold;
        margin-right: 3.5rem;
    }
    p{
        color: #fff;
        font-family:'Poppins';
        font-size: 1.2rem;
        margin-top: 40px;
    }

    @media (max-width: 1100px) {
        width:78%;
        height: 90%;

        transform:scale(0.8);
    }
`;


export const ButtonBannerToForm = styled.button`
    background: #5627AE;
    border: none;
    color: #fff;
    font-family: "Montserrat";
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 18px;
    padding: 1rem 2rem;
    margin: 40px auto;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: translateY(-1px);
        background-color: #441f8b;

    }
`;
