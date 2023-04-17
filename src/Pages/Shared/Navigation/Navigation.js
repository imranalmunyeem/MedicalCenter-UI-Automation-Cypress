import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../nav.css";

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <div className='bg-primary'>
            <Navbar
                collapseOnSelect
                expand="lg">

                <Navbar.Brand style={{fontFamily: 'Alkatra'}} className='text-light fw-bolder ms-lg-5 ms-3 title'>First Choice Medical Center</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className="justify-content-end me-2">
                    <Nav.Link className="link" as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link className="link" as={Link} to="/appointment">
                        Appointment
                    </Nav.Link>

                    {user?.email ? (
                        <>
                        <Nav.Link className="link" as={Link} style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    Dashboard
                                </Nav.Link>
                            <Button
                                className="btn mt-1 ms-2 rounded-0"
                                style={{
                                    color: "white",
                                    border: '1px solid white',
                                    padding: "6px 10px",
                                }}
                                onClick={logout}
                                variant="light"
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <Nav.Link
                        className="link"
                            as={Link}
                            to="/Login"
                            variant="light"
                        >
                            Log in
                        </Nav.Link>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;