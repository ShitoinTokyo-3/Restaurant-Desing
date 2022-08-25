import styled from "styled-components";

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    padding-bottom: 0;

    h3 {
        font-family: var(--Font-Family-Titles);
        font-size: 2.5rem;
        font-weight: bold;
    }
    p {
        font-family: var(--Font-Family-Text);
        font-size: 1.2rem;
        margin: .8rem 0;
    }
`;