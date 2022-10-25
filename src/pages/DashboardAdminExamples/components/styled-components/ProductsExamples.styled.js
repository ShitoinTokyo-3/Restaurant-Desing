import styled from "styled-components";

export const DivProducts = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: visible;
    padding: 10px;
    text-align: left;
    margin-bottom: 2.5rem;
`;


export const DivProduct = styled.div`
    display: flex;
    font-family: var(--Font-Family-Titles);
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid var(--Color-Text-Black);
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    max-width: 200px;
    min-width: 200px;

    span{
        margin: 0;
    }

    &:hover {
        background-color: var(--Color-Button-White-Hover);
    }
    div{
        width: 100%;
    }
    .iconAdminCategories{
        width: 20%;
        margin-left: 10px;
    }

`;
