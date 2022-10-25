import styled from "styled-components";

export const ContainerFormPay = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    font-family: var(--Font-Family-Text);
    h1,h2,h3,h4,h5,h6{
        font-family: var(--Font-Family-Titles);
    }


`;

export const Form = styled.form`
    width: 75vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    justify-content: center;
    label{
    margin-top: 2.5rem;
        font-size: 1.6rem;
        font-family: var(--Font-Family-Titles);
        font-weight: 700;
    }
    input{
    box-sizing: border-box;
        width: 100%;
        border: 2px solid var(--Color-Background-Modal-Overlay);
        border-radius: 4px;
        padding: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 1.6rem;
        font-family: var(--Font-Family-Text);
        font-weight: 400;
    }

`;