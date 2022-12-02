import styled from "styled-components";

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-family: var(--Font-Family-Text);
    text-align: left;

    h1{
        font-family: var(--Font-Family-Titles);
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    h2, h3, h4, h5, h6{
        width:65vw;
        font-family: var(--Font-Family-Titles);
    }
    h2{
        font-size: 2.5rem;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }
    h3{
        font-size: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }
    li{
        width:65vw;

        margin: 0.5rem 1.5rem;
    }
    p{
        margin: 0.5rem 0;
        width:65vw;
    }
    #dashboardImgBig{
        max-width: 100%;
    }
    #dashboardImg{
        max-width: 400px;
    }

`; 


export const NavToUp = styled.div`
    position: fixed;
    bottom: 2.5rem;
    right: 4rem;
    z-index: 100;
    cursor: pointer;
    transition: 0.3s;
    font-size: 3rem;
    color: var(--Color-Button-Blue);
    background-color: #fff;
    border: 3px solid #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.3rem;

    &:hover{
        transform: scale(1.1);
        color: var(--Color-Button-Blue-Hover);
    }
    
`;

