import styled from "styled-components";

export const ContainerCategories = styled.div`
    display: flex;
    margin: 40px 0;
    font-family: var(--Font-Family-Titles);

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
    font-family: var(--Font-Family-Titles);
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

export const ContainerInputsColors = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-bottom: 20px;
`;

export const InputColorCategories = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    label{
        margin: 10px auto;
    }
    
    #backgroundColor{
        width: 100px;
        height: 100px;
        cursor: pointer;
        border-radius: 15px;
        border: 5px solid var(--Color-Text-Black);
    }

    #popover {
          position: absolute,
          zIndex: 2,
    }
    #cover {
        position: fixed,
        top: 0px,
        right: 0px,
        bottom: 0px,
        left: 0px,
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

export const ContainerOptionsCategories = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--Font-Family-Titles);
    align-items: center;

    strong{
        margin: 10px 0;
    }

    select{
        padding: 5px 10px ;
    }
`;

export const ContainerProductsInExamples = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--Font-Family-Titles);
    margin: 1rem 0;
    padding: 1rem 0;  
    margin-bottom: 0;
    padding-bottom: 0;  

    strong{
        padding: 5px 10px;
        align-self: center;
    }
`;

export const ExampleCategorie = styled.div`
    width: 444px;
    height: 444px;
    position: relative;
    margin-bottom: 20px;
    margin-left: 60px;

    #slide__img {
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        width: 100%;
        min-height: 100%;
        min-width: 100%;
        max-width: none;
        transform: translate(-50%, -50%);
    }

    #slide__text{
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        width: 300px;
        min-height: 100%;
        min-width: 100%;
        max-width: none;
        transform: translate(-50%, -50%);
        font-family: var(--Font-Family-Text);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        align-items: flex-start;
        text-align: left;
        cursor: default;

        &:hover{
            opacity: 0.9;
        }

        #slide__text__title{
            font-size: 36px;
            font-weight: bold;
            margin-top: 30px;
            
        }

        #slide__text__link{
            font-size: 23px;
            font-weight: bold;
            text-decoration: underline;
            margin-bottom: 60px;
            cursor: pointer;
        }

        p{
            font-size: 16px;
        }

        p,span{
            display: inline-block;
            margin: 0 50px;
        }
    }
`;