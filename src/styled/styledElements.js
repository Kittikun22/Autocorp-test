import { NavLink as Link } from "react-router-dom"
import styled from 'styled-components'

export const NavBar = styled.nav`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background: #323232;
    height: 85px;
    display: flex;
    justify-content: Center;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: Center;
    list-style-type: none;
    padding-left: 1rem;

`

export const NavList = styled.li`
    display: flex;
    align-items: center;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    text-decoration: none;
    padding-right:2rem;
    padding-left: 0;
    cursor: pointer;
    &.active{
        font-weight:bold;
        color:#ffd700;
    }
`
