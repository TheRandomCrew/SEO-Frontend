import React from 'react'
import { default as NavBarView } from './visual/NavBar';

const NavBar = ({ changeTheme, logout, links }) => {
    const [burger, setBurger] = React.useState(true);

    return (
        <NavBarView
            logout={logout}
            changeTheme={changeTheme}
            setBurger={setBurger}
            links={links}
            burger={burger}
        />
    )
}

export default NavBar;