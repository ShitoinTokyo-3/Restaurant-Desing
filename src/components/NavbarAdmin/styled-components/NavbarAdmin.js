import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const NavbarAdminContainer = styled.div`
    width: 100%;
    height: 80px;
    position: relative;
    top: 0;
    z-index: 99;
    box-shadow: var(--Box-Shadow-Navbar);
`;

export const NavbarAdminWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const AdminIconLogo = styled.div`
    width: 280px;
    padding-left: 1rem;

    img {
        width: 100%;
        cursor: pointer;
    }

    @media screen and (max-width: 968px) {
        width: 220px;
    }
`;

export const AdminMenu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AdminMenuItem = styled.li`
    position: relative;
    height: 100%;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    font-family: var(--Font-Family-Text);
`;

export const AdminMenuLink = styled(Link)`
    text-decoration: none;
    color: #000;
    cursor: pointer;
    font-size: 2.2rem;
    margin-right: 1rem;
`;