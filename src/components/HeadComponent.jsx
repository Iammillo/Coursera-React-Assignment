import React, { Component } from 'react';
import { Navbar , NavbarBrand,Nav, NavbarToggler,Collapse,NavItem,Jumbotron,
Button, Modal, ModalHeader, ModalBody,Form,FormGroup,Label,Input} from 'reactstrap'
import {NavLink} from 'react-router-dom'


class Header extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            isNavOpen:false,
            isModalOpen:false
        }
    }
    toggleModal=()=>
    {
        this.setState(
            {isModalOpen:!this.state.isModalOpen}
        )
    }

    handleLogin=(event)=>
    {
        this.toggleModal();
        alert("Username: "+this.username.value + " Password: "+this.password.value+" Remember: "+this.remember.checked);
        event.preventDefault()
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
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-sign-in fa-lg"></span>Login
                        </Button>
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
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username:</Label>
                            <Input type="text" id="username" name="username"
                            innerRef={(input)=>this.username=input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password:</Label>
                            <Input type="password" id="password" name="password" 
                            innerRef={(input)=>this.password=input}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="remember"
                            innerRef={(input)=>this.remember=input}/>
                            Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary" className="m-1">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </>
         );
    }
}
 
export default Header;