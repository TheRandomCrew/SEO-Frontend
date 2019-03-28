import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import tokenService from '../service/token'
import { history, links } from '../routes'

const NavBar = ({ logo }) => {
    const logout = () => {
        tokenService.delete()
        history.replace('/login')
    }
    return (
        <Nav>
            <NavLink
                activeStyle={{
                    fontWeight: "bold",
                    float: 'left',
                    textAlign: 'center',
                    display: 'block',
                    backgroundColor: '#9954BB',
                    color: '#f2f2f2',
                    padding: '14px 16px',
                    textDecoration: 'none',
                }}
                to={'/'}
            >
                Logo
            </NavLink>
            {links.map((link, index) => {
                return (
                    <NavLink to={link.to} key={link.id + index}>
                        <Link>
                            {link.name}
                        </Link>
                    </NavLink>
                )
            })}
            <Button onClick={logout}>Salir</Button>
        </Nav>
    )
}

export default NavBar;

const Nav = styled.nav`
    overflow: hidden;
    background-color: #9954BB;
    position: fixed; 
    top: 0; 
    width: 100%; 
`
const Link = styled.span`
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`
const Button = styled.button`
    background: #9954BB;
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    position: absolute;
    right: 0px;
`