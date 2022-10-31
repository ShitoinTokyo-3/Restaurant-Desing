import styled from "styled-components";

export const StepsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 75%;
    margin: 2.5rem auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const StepsText = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 80%;
    line-height: 1.1;
    padding-bottom: 2rem;

    h3{
        font-size: 2rem;
        font-weight: bold;
        font-family: var(--Font-Family-Titles);
    }
    p{
        margin: 0.5rem 0;
        font-family: var(--Font-Family-Text);
        font-size: 1.2rem;
    }

    @media (max-width: 768px) {
        h3{
            font-size: 1.6rem;
        }
        p{
            font-size: 1rem;
            margin: 0.5rem 0;
        }
    }
`;