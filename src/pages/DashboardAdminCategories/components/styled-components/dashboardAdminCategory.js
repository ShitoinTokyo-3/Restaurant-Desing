import styled from "styled-components";

export const ContainerCategories = styled.div`
    display: flex;
    margin: 40px 0;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const DivCategories = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: visible;
    overflow-y: scroll;
    padding-top: 10px;
    width: 330px;
    height: 80vh;
    text-align: left;
`;

export const DivCategory = styled.div`
    display: flex;
    font-family: var(--Font-Family-Titles);
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid var(--Color-Text-Black);
    margin: 10px 0;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;

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

export const FormCategory = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: var(--Font-Family-Titles);
    width: 100%;

    label{
        align-self: flex-start;
        margin: 10px 20px;
    }

`;

export const InputCategories = styled.input`
    width:90%;
    padding: 10px;
    font-family: var(--Font-Family-Text);
    margin-bottom: 20px;
`;

export const TextareaCategories = styled.textarea`
    width:90%;
    padding: 10px;
    font-family: var(--Font-Family-Text);
    resize: none;
    height: 100px;
    margin-bottom: 20px;
`;

export const ButtonCategories = styled.input`
    padding: 10px;
    font-family: var(--Font-Family-Titles);
    border-radius: 5px;
    cursor: pointer;
    background-color: var(--Color-Button-White);

    &:hover {
        background-color: var(--Color-Button-White-Hover);
    }
`;

export const ErrorCategory = styled.p`
    color: var(--Color-Text-Error-Form);
    font-weight: 700;
    font-size: 20px;
`;

export const SuccessCategory = styled.p`
    color: var(--Color-Text-Good-Form);
    font-weight: 700;
    font-size: 20px;
`;


