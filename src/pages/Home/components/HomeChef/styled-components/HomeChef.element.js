import styled from "styled-components";

export const HomeChefContainer = styled.div`
    display: flex;
    padding: 3rem;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;
        margin: 3rem 0;
    }
`;

export const HomeChefLeft = styled.div`
    width: 50%;
    img {
        width: 100%;
    }

    @media (max-width: 768px) {
        display:flex;
        width: 100%;
        img {
            height: auto;
            width: 90%;
            margin: 0 auto;
        }
    }
`;
export const HomeChefRight = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 3rem;
    h3{
        font-size: 2.2rem;
        font-family: var(--Font-Family-Titles);
        font-weight: bold;
        line-height: 1;
    }
    p{
        font-size: 1.2rem;
        font-family: var(--Font-Family-Text);
        margin-top: 1.5rem;
    }
    .ButtonChef{
        margin-top: 3rem;
    }

    @media (max-width: 768px) {
        width: 80%;
        margin-top: 2rem;
        padding: 0;

        h3{
            font-size: 1.7rem;
        }
        p{
            font-size: 0.9rem;
            width: 85%;
        }
        .ButtonChef{
            font-size: 1rem;
            margin-top: 1.5rem;
            margin-bottom: 0;
        }
    }
`;