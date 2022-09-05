import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--Color-Background-Footer);

    img{
        width: 300px;
    }
    span{
        font-size: .9rem;
        font-family:var(--Font-Family-Titles);
        color: var(--Color-Text-White);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;