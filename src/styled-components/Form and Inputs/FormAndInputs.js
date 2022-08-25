import styled from "styled-components";

export const FormUsers = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: space-between;
`;

export const InputFormUsers = styled.input`
    font-size: 1.1rem;
    font-family: var(--Font-Family-Text);
    padding: .5rem 1rem;
    margin-bottom: 1rem;
    border: 2px solid #ccc;

    &::placeholder {
        color: var(--Color-Text-Inputs-Placeholder);
    }
`;

export const ContainerInputFormUsersRegister = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin:auto;
    position: relative;

    .iconInput{
        font-size: 1.5rem;
        position: absolute;
        top: 7px;
        left: 10px;
        color: var(--Color-Input-Icon-Signup);
    }
`;

export const ForgotPasswordForm = styled.div`
    font-family: var(--Font-Family-Text);
    color: var(--Color-Text-Black);
    margin-bottom: 1rem;
    display: inline-block;
`;

export const ErrorInputs = styled.div`
    font-family: var(--Font-Family-Text);
    font-size: .8rem;
    display: flex;
    align-items: center;
    color: var(--Color-Text-Error-Form);
    margin-top: -.5rem;
    margin-bottom: .5rem;
    padding-left: 1rem;
`;

export const GoodMessage = styled.div`
    font-family: var(--Font-Family-Text);
    font-size: .8rem;
    display: flex;
    align-items: center;
    color: var(--Color-Text-Good-Form);
    margin-top: 1rem;
    margin-bottom: .5rem;
    padding-left: 1rem;
`;

export const CheckboxForm = styled.div`
    position: relative;
    margin: 2px 0;
    text-align: left;
    input[type="checkbox"] {
        cursor: pointer;
        margin-right: 10px;
        position: relative;
        top: 2px;
        &:hover {
            background: #000;
        }
    }
    label{
        font-family: var(--Font-Family-Text);
        font-size: .8em;
    }
`;