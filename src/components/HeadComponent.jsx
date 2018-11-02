import React, { Component } from 'react';
import { Navbar , NavbarBrand,Nav, NavbarToggler,Collapse,NavItem,Jumbotron} from 'reactstrap'
import {NavLink} from 'react-router-dom'


class Header extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            isNavOpen:false
        }
    }

    toggleNav=()=>
    {
        this.setState(
            {isNavOpen:!this.state.isNavOpen}
        )
    }
    render() { 
        return ( 
            <>
            <Navbar dark expand="md">
            <div className="container">
            <NavbarBrand className="mr-auto" href="/">
                <img src="assets/images/logo.png" height="30" width="41" alt ="Milan" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} onClick={this.toggleNav} navbar>
                <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span>About Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/menu"><span className="fa fa-link fa-lg"></span>Menu</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg">Contact Us</span></NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </div>
            </Navbar> 
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Milan</h1>
                        <p>We take inspiration from the world's best cuisines, and create a unique fusion experiene. Out lipsmacking creations willl tickle your culinary sense!</p>
                    </div>
                    </div>
                </div>
            </Jumbotron>
            </>
         );
    }
}
 
export default Header;