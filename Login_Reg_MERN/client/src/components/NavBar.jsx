import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <>
        <Nav variant="pills" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link href="/">Test Cookie</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/userInfo">User info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/users">All Users</Nav.Link>
            </Nav.Item>
        </Nav>
        </>
    )
}

export default NavBar