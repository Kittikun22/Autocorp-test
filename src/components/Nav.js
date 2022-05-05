import React from 'react'
import { NavBar, NavMenu, NavLink, NavList } from '../styled/styledElements'

function Nav() {
  return (
    <>
        
        <NavBar>
            <NavMenu>
                <NavList>
                    <NavLink to="/">Calculate</NavLink>
                </NavList>
                <NavList>
                    <NavLink to="/History">History</NavLink>
                </NavList>
            </NavMenu>
        </NavBar>
    </>
  )
}

export default Nav