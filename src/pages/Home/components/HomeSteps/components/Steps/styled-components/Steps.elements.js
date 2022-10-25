import styled from "styled-components";

export const StepsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 1rem;
    img{
        width: 55%;
    }
    .colorExample{
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        margin-bottom: 2rem;
    }
    h3{
        font-size: 2.5rem; 
        font-weight: bold;
        font-family: var(--Font-Family-Titles);
    }
    p{
        margin: 0.5rem 0;
        font-family: var(--Font-Family-Text);
    }
`;