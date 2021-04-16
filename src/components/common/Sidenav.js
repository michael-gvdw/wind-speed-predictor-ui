import React from 'react'

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

// style
import "../../styles/common/sidenav.scss"

// icons
import { FcAbout } from 'react-icons/fc'
import { GiWindsock } from 'react-icons/gi'
import { FaFileContract } from 'react-icons/fa'


const Sidenav = () => {
    return (
        <nav className={`sidenav`}>
            <ul className={`sidenav-nav`}>
                <NavItem icon={<GiWindsock/>} text={`Wind Forecast`} link={'/home'}/>
                <NavItem icon={<FcAbout/>} text={`About`} link={'/about'}/>
                <NavItem icon={<FaFileContract/>} text={`Terms`} link={'/terms'}/>
            </ul>
        </nav>
    )
}

// holds link text icon
const NavItem = (props) => {
    return (
        <li className={`nav-item`}>
            <NavLink link={props.link} text={props.text} icon={props.icon} />
        </li>
    )
}

const NavLink = (props) => {
    return (
        <Link className={`nav-link`} to={props.link}>
            <LinkIcon icon={props.icon} />
            <LinkText text={props.text} />
        </Link> 
    )
}

const LinkText = (props) => {
    return (
        <span className={`link-text`}>{ props.text }</span>
    )
}

const LinkIcon = (props) => {
    return ( props.icon )
}

export default Sidenav;

