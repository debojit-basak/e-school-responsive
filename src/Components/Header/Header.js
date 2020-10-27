import React from 'react'
import { Navbar, Nav, NavDropdown,  } from 'react-bootstrap';
import Logo from '../../images/ICON/Logo.png'
import './Header.css';
import {Link} from 'react-router-dom'
function Header() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="md" bg="danger" variant="dark" className="header">
  <Navbar.Brand><Link to="/"><img className="header__image" src={Logo} /></Link></Navbar.Brand>
  <Navbar.Toggle className="navbar-toggler" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="">
    <Nav className="ml-auto">
      <Link to="/"  className="nav__link">ABOUT US</Link>
      <Link to="/courses" className="nav__link">COURSES</Link>
      <Link to="/teachers" className="nav__link">TEACHERS</Link>
      <Link to="/testimonials" className="nav__link">TESTIMONIALS</Link>
      
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        
    )
}

export default Header
