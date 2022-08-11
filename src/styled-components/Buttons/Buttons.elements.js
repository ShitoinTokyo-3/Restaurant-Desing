import styled from "styled-components";

export const ButtonGreen = styled.button`
    background-color: #75AA40;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #759f4b;
        color: #fff;
    }
`;

export const ButtonMediaLogin = styled.button`
    font-family: 'Montserrat';
    font-size: .8rem;
    background-color: #fff;
    color: #444;
    border: 1px solid #777;
    padding: 0.4rem 1.5rem;
    padding-left: .7rem;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #f5f5f5;
    }
`;

export const ButtonLoginEmail = styled.button`
    font-family: 'Montserrat';
    font-size: 1.5rem;
    margin:auto;
    width: 50%;
    color : #fff;
    border: none;
    background-color: #444EC3;
    padding: 0.6rem 0;
    cursor: pointer;

    &:hover {
        background-color: #363fa9;
    }
`;

