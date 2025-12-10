import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Menu, NavLink } from './styles';
import React, { useState } from 'react';

export default React.memo(function Manubar() {
    const [open, setOpen] = useState(false);
    function toogleOpen(e){
        setOpen(!open);
    }
    return (
        <>
            <Menu expand={open} expanded={open} className="bg-body-tertiary mb-3">
                <Container fluid>
                    <NavLink to={'/'}>Home</NavLink>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} onClick={toogleOpen} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-false`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                        placement="end"
                    >
                        <Offcanvas.Header onClick={toogleOpen} closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3" onSelect={(e) => toogleOpen(e)}>
                                <NavLink to={'/'} onClick={toogleOpen}>Home</NavLink>
                                <NavLink to={'/favoritos'} onClick={toogleOpen}>Favoritos</NavLink>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Menu>
        </>
    );
});