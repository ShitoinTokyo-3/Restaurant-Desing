import styled from "styled-components";

export const FormUsers = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: space-between;
`;

export const InputFormUsers = styled.input`
    font-size: 1.1rem;
    font-family: "Roboto", sans-serif;
    padding: .5rem 1rem;
    margin-bottom: 1rem;
    border: 2px solid #ccc;

    &::placeholder {
        color: #bbb;
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
        color: #bbb;
    }
`;

export const ForgotPasswordForm = styled.div`
    font-family: "Roboto", sans-serif;
    color: #000;
    margin-bottom: 1rem;
    display: inline-block;
`;

export const ErrorInputs = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: .8rem;
    display: flex;
    align-items: center;
    color: #cb3234;
    margin-top: -.5rem;
    margin-bottom: .5rem;
    padding-left: 1rem;
`;

export const GoodMessage = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: .8rem;
    display: flex;
    align-items: center;
    color: #008f39;
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
        font-family: "Roboto", sans-serif;
        padding: 0 0 5px 43px;
        font-size: .8em;
    }
`;