import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const ContainerNavbarPanel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;


`;

export const NavbarPanelLinkContainer = styled.div`
    width: 100%;
    margin: 0 3px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    cursor: pointer;
    height: 75px;
`;

export const NavbarPanelLink = styled(Link)`
    display: inline-block;
    font-family:var(--Font-Family-Titles);
    font-weight: 700;
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    width: 95%;
    height: 60%;
    background-color: #aaa;
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        text-decoration: underline;
    }
    &[class*="active"] {
        background-color: #fff;
        width: 100%;
        height: 80%;
        padding: 0 5px;
    }
`;


