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
    margin-bottom: 1rem;
    padding-left: 1rem;
`;