import React from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Nav, 
  Button, 
  ToggleThemeWrapper, 
  ToggleTheme, 
  Burger, 
  NavResponsive, 
  Link,
  NavLinkA
} from '../style/component';

const NavBar = ({logout, changeTheme, setBurger, burger, links}) => {
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
        <NavLinkA to='/login'>
          Logo
        </NavLinkA>
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

export default NavBar
