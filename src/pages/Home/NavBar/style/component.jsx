import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    overflow: hidden;
    background-color: ${ props => props.theme.nav};
    position: fixed; 
    top: 0; 
    width: 100%; 
    z-index: 10;
    @media (max-width: 576px) {
        padding: 30px;
    }
`

export const NavLinkA = styled(NavLink)`
    font-weight: bold;
    float: left;
    text-align: center;
    display: block;
    color: #f2f2f2;
    padding: 14px 16px;
    text-decoration: none;
`

export const NavResponsive = styled.nav`
    @media (max-width: ${1000 / 16}em) {
        display: ${props => props.hide ? 'none' : 'block'};
    }
`

export const Link = styled.span`
    font-family: "kotori_rosebold";
    font-size: 15px;
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    &:hover{
        background-color: #ddd;
        color: black;
    }
`
export const Button = styled.button`
    background-color: ${ props => props.theme.nav};
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    position: absolute;
    right: 0px;
`

export const Burger = styled.button`
    display:none;
    @media (max-width: ${1000 / 16}em) {
        display: block;
    }
`
export const ToggleTheme = styled.svg`
    cursor: pointer;
    fill: ${ props => props.theme.red};
    margin-left: 5px;

    @media (max-width: 576px) {
    }
`;

export const ToggleThemeWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    font-size: 10px;
    text-transform: uppercase;
    color: ${ props => props.theme.text};
`;