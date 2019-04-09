import React from 'react';
import tokenService from '../../token'
import { history, links } from '../../Routes'
import globalContext from '../../../store/globalContext'
import { default as NavBarModule } from '../NavBar/NavBar';

const NavBar = () => {
    const { actions: { changeTheme } } = React.useContext(globalContext);

    const logout = () => {
        tokenService.delete()
        history.replace('/login')
    }
    return (
        <NavBarModule
            logout={logout}
            changeTheme={changeTheme}
            links={links}
        />
    )
}

export default NavBar
