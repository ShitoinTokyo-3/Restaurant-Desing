import styled from "styled-components";

export const ContainerCheck = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: var(--Font-Family-Text);  
    font-size: 1rem;
    width: 100%;
    padding: 50px 60px;
    text-align: left;
    height: auto;

    h2{
        font-family: var(--Font-Family-Titles);
        font-size: 2rem;
        margin: auto;
    }
    p{
        margin: 10px 0;
    }

    button{
        margin-top: 40px;
    }

    @media (max-width: 768px) {
        box-sizing: border-box;
        padding: 30px 30px;
        margin: auto;
        width: auto;
    }

`;

export const ButtonPurple = styled.button`
    background-color: var(--Color-Button-Blue);
    color: var(--Color-Text-White);
    border: none;
    font-family: var(--Font-Family-Titles);
    font-weight: 700;
    font-size: 1.2rem;
    padding: 15px 20px;
    border-radius: 10px;
    text-transform: uppercase;
    transition: var(--Transition-Button);
    cursor: pointer;
    align-self: center;

    &:hover {
        transform: translateY(-1px);
        background-color: var(--Color-Button-Blue-Hover);
    }
`;

export const ButtonPurpleVariant = styled.button`
    background-color: transparent;
    color: var(--Color-Text-Purple);
    border: 2.5px solid var(--Color-Text-Purple);
    font-family: var(--Font-Family-Titles);
    font-weight: 700;
    font-size: 1.2rem;
    padding: 15px 20px;
    border-radius: 10px;
    text-transform: uppercase;
    cursor: pointer;
    transition: var(--Transition-Button);
    align-self: center;

    &:hover {
        transform: translateY(-1px);
        background-color: var(--Color-Button-Blue-Hover);
        color: var(--Color-Text-White);
    }
`;

export const List = styled.div`
    display: flex;
    margin-top: 18px;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;


    span {
        margin:0;
        margin-left: 10px;
        width: 100%;
    }

    .iconCheck{
        font-size: 2rem;
    }
`;