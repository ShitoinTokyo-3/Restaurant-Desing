import styled from "styled-components";

export const ButtonLogin = styled.button`

    background-color: var(--Color-Button-Blue);
    
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    box-shadow: var(--Box-Shadow-Button);
    cursor: pointer;
    color: var(--Color-Text-White);
    font-weight: bold;
    transition: var(--Transition-Button);

    &:hover {
        transform: translateY(-1px);
        background-color: var(--Color-Button-Blue-Hover);
        color: var(--Color-Text-White);
    }
`;

export const ButtonMediaLogin = styled.button`
    font-family: var(--Font-Family-Titles);
    font-size: .8rem;
    background-color: var(--Color-Button-White);
    color: var(--Color-Text-Button-Google-Facebook);
    border: 1px solid #777;
    padding: 0.4rem 1.5rem;
    padding-left: .7rem;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
        background-color: var(--Color-Button-White-Hover);
    }

    @media (max-width: 768px) {
        margin: 0.5rem 0;
        width: 211px;
    }
`;

export const ButtonLoginEmail = styled.button`
    font-family: var(--Font-Family-Titles);
    background-color: var(--Color-Button-Blue);
    font-size: 1.5rem;
    margin:auto;
    width: 50%;
    color : var(--Color-Text-White);
    border: none;
    padding: 0.6rem 0;
    cursor: pointer;
    margin-bottom: 1rem;
    margin-top: .5rem;
    transition: var(--Transition-Button);
    border-radius: 8px;

    &:hover {
        background-color: var(--Color-Button-Blue-Hover);
    }
`;

