import React from 'react'
import styled from 'styled-components'

const NavBar = ({ links, logo }) => {
    return (
        <Nav>
            {links.map(link => {
                return (
                    <Link to={link.to}>
                        {link.name}
                    </Link>
                )
            })}
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
const Link = styled.a`
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`
