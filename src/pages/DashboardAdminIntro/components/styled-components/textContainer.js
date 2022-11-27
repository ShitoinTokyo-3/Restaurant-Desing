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
