import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Sidebar() {
    const [show, setShow] = useState(true);
    const closeSidebar = () => setShow(false);
    const showSidebar = () => setShow(true);
    return (
        <div>
            <Row>
                <div className="left">
                    <Col sm={4}>
                        <Container className='p-2 submenu'>
                            <Button variant="primary" onClick={showSidebar} className='togglebarmenu'>
                                Open
                            </Button>
                            <Offcanvas placement='start' show={show} onHide={closeSidebar}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Sidebar Title</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div className='sidemenu'>
                                        <ul><li><a href="">Dashboard</a></li></ul>
                                        <ul><li><a href="">Setting</a></li></ul>
                                        <ul><li><a href="">Entry</a></li></ul>
                                        <ul><li><a href="">Report</a></li></ul>
                                        <ul><li><a href="">Help</a></li></ul>
                                        <ul><li><a href="">Logout</a></li></ul>

                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Container>
                    </Col>
                </div>
                <div className="right">
                    <Col sm={8}>
                        <Navbar bg="light" data-bs-theme="primary">
                            <Container>
                                
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Patient</Nav.Link>
                                    <Nav.Link href="#features">Depertment</Nav.Link>
                                    <Nav.Link href="#pricing">Test</Nav.Link>
                                    <Nav.Link href="#pricing">Refreel</Nav.Link>
                                    <Nav.Link href="#pricing">User</Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                    </Col></div>

            </Row>
        </div>
    )
}

export default Sidebar