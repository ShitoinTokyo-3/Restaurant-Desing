import styled from "styled-components";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0; 
    left: 0;
    background: transparent;
    padding-left: 0;
    margin-left: 0;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--Transition-Button);
`;


export const ContainerModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: var(--Color-Background-Modal);
    position: relative;
    border-radius: 5px;
    box-shadow: var(--Box-Shadow-Modal);
    padding: 20px;
    z-index: 2000;
`;
export const OverlayFake = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0; 
    left: 0;
    background: var(--Color-Background-Modal-Overlay);
    z-index: 1010;
`;


export const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    h3 {
        font-weight: 500;
        font-size: 16px;
        color: transparent;
        cursor: default;
    }
`;

export const BotonCerrar = styled.button`
    position: absolute;
    top:15px;
    right: 20px;

    width: 30px;
    height: 30px;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: var(--Transition-Modal);
    border-radius: 5px;
    color: var(--Color-Icon-Close-Modal);

    &:hover {
        background: #f2f2f2;
    }
`;

export const  ModalChildrens = styled.div`
    padding-left: 30px;
    padding-right: 30px;
`;