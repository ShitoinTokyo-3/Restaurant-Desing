import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    position: relative;
    top: 0;
    z-index: 99;
    box-shadow: 0px 10px 5px -6px rgba(122,122,122,1);
    @media screen and (max-width: 968px) {
        width: 100%;

    }

`;

export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`;

export const IconLogo = styled.div`
    width: 280px;
    padding-left: 1rem;

    img {
        width: 100%;
    }
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 968px) {
        width: 100%;
        height:100vh;
        position: fixed;
        top: 68px;
        left: ${({click}) => click ? 0 : "-100%" };	
        flex-direction: column;
        transition: all 0.5s ease-in-out;
        background-color: #fff;
        z-index: 98;

    }
`;

export const MenuItem = styled.li`
    position: relative;
    height: 100%;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    font-family: Arial;

    @media screen and (max-width: 968px) {
        width: 100%;
        height: 78px;
        border-bottom: 1px solid #e6e6e6;
    }
`;
export const MenuItemLink = styled(Link)` 
    text-decoration: none;
    color: #555;
    cursor: pointer;
`;

export const IconLogoMovile = styled.div`
    display: none;

    @media screen and (max-width: 968px) {
        display: flex;
        color: #000;
        font-size: 2rem;
        padding-right: 1rem;
        cursor: pointer;
    }
`;

export const SelectorDropdown = styled.input`
    position: absolute;
    width: 150px;
    border: none;
    outline: none;
    cursor: pointer;

    &::placeholder {
        font-size: 0.9rem;
        color: #555;
    }
`;


export const UserNavbar  = styled.div`
    display: flex;
    align-items: center;
    
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    span{
        font-size: 0.9rem;
        color: #555;
        margin-right: 1rem;
        margin-left: 0.5rem;
    }
`;