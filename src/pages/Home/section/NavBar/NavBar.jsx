import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tokenService from '../../../token'
import { history, links } from '../../../Routes'
import globalContext from '../../../globalContext'

const NavBar = ({ logo }) => {
    const [burger, setBurger] = React.useState(true);
    const { actions: { changeTheme } } = React.useContext(globalContext)
    const logout = () => {
        tokenService.delete()
        history.replace('/login')
    }
    return (
        <Nav>
            <Button onClick={logout}>Salir</Button>
            <ToggleThemeWrapper>
                <span>Cambiar Tema</span>
                <ToggleTheme onClick={() => changeTheme()}
                    height="24"
                    width="24"
                    viewBox="0 0 24 24">
                    <path d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z" />
                </ToggleTheme>
            </ToggleThemeWrapper>
            <Burger
                onClick={() => setBurger(!burger)}
            >
                <FontAwesomeIcon
                    icon="search"
                    flip="horizontal"
                />
            </Burger>
            <NavLink
                activeStyle={{
                    fontWeight: "bold",
                    float: 'left',
                    textAlign: 'center',
                    display: 'block',
                    color: '#f2f2f2',
                    padding: '14px 16px',
                    textDecoration: 'none',
                }}
                to={'/'}
            >
                Logo
            </NavLink>
            <NavResponsive
                hide={burger}
            >
                {links.map((link, index) => {
                    return (
                        <NavLink to={link.to} key={link.id + index}>
                            <Link>
                                {link.name}
                            </Link>
                        </NavLink>
                    )
                })}
            </NavResponsive>
        </Nav>
    )
}

export default NavBar;

const Nav = styled.nav`
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

const NavResponsive = styled.nav`
    @media (max-width: ${1000 / 16}em) {
        display: ${props => props.hide ? 'none' : 'block'};
    }
`

const Link = styled.span`
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
const Button = styled.button`
    background-color: ${ props => props.theme.nav};
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    position: absolute;
    right: 0px;
`

const Burger = styled.button`
    display:none;
    @media (max-width: ${1000 / 16}em) {
        display: block;
    }
`
const ToggleTheme = styled.svg`
	cursor: pointer;
    fill: ${ props => props.theme.red};
    margin-left: 5px;

	@media (max-width: 576px) {
    }
`;

const ToggleThemeWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    font-size: 10px;
    text-transform: uppercase;
    color: ${ props => props.theme.text};
`;