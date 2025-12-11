import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Menu, NavLink } from './styles';
import React, { useState } from 'react';

export default React.memo(function Manubar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);

    return (
        <>
            <Menu expand="lg" className="bg-body-tertiary mb-3"> 
                <Container fluid>
                    <NavLink to={'/'}>Home</NavLink>
                    
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" onClick={handleShow} />
                    
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-lg"
                        aria-labelledby="offcanvasNavbarLabel-expand-lg"
                        placement="end"
                        show={show}          
                        onHide={handleClose} 
                    >
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <NavLink to={'/'} onClick={handleClose}>Home</NavLink>
                                <NavLink to={'/favoritos'} onClick={handleClose}>Favoritos</NavLink>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Menu>
        </>
    );
});
