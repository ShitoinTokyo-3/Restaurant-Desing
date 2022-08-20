import styled from "styled-components";

export const FormInputsContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FormInputSecondContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`; 

export const FormInput = styled.input`
    width: 400px;
    background-color: #E6E6E6;
    padding: 1rem;
    border: 3px solid #fff;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;

    &::placeholder {
        font-size: 1.2rem;
        font-family: 'Poppins', sans-serif;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const FormArea = styled.textarea`
    width: 400px;
    background-color: #E6E6E6;
    padding: 1rem;
    border: 3px solid #fff;
    border-radius: 5px;
    resize: none;
    height: 130px;

    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    

    &::placeholder {
        font-size: 1.2rem;
        font-family: 'Poppins', sans-serif;
    }
    @media (max-width: 768px) {
        width: 218px;
    }
`;

export const TermsAndConditions = styled.div`
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    cursor:default;
    margin-bottom: 1rem;

    span{
        padding:0;
        margin:0;
        font-weight: bold;
        cursor: pointer;
    }
`;

export const InputSubmit = styled.input`
    background: #5627AE;
    border: 1px solid #aaa;
    color: #fff;
    font-family: "Montserrat";
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 18px;
    padding: 1rem 2rem;
    margin: 2rem auto;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: translateY(-1px);
        background-color: #441f8b;

    }
`;

export const FormInputModal = styled.input`
    width: 300px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    padding: .7rem 2rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    border: 2px solid #ccc;

    &::placeholder {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
    }
`;

export const FormAreaModal = styled.textarea`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    padding: .7rem 2rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    border: 2px solid #ccc;
    resize: none;
    width: 300px;

    &::placeholder {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
    }
`;

export const InputSubmitModal = styled.input`
    background: #5627AE;
    border: 1px solid #aaa;
    color: #fff;
    font-family: "Montserrat";
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 18px;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: translateY(-1px);
        background-color: #441f8b;

    }
`;

export const TermsAndConditionsModal = styled.div`
    font-size: .9rem;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    cursor:default;
    margin-top: 1rem;

    span{
        padding:0;
        margin:0;
        font-weight: bold;
        cursor: pointer;
    }
`;
