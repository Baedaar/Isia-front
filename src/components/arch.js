import React from "react";
import {Card, Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import {Link} from "react-router-dom";



export default function Acceuil() {

    return (
        <>
            <header>
                <Navbar id="nav" expand="lg">
                    <Container>
                        <Navbar.Brand id="brand" href="#home">Diagonal</Navbar.Brand>
                            <Navbar.Collapse id="basic-navbar-nav">
                                </Navbar.Collapse>
                                    <Nav className="me-auto">
                                        <Nav.Link id="nav-link-home" as={Link} to={"/home"}>Acceuil</Nav.Link>
                                        <NavDropdown title="Connexion" id="basic-nav-dropdown">
                                            <NavDropdown.Item as={Link} to={"/connection/Employe"}>
                                                Employé
                                            </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                            <NavDropdown.Item as={Link} to={"/connection/Admin"}>
                                                Admin
                                                </NavDropdown.Item>
                                            
                                        </NavDropdown>
                                    </Nav>
                    </Container>
                </Navbar>
            </header>
            <Container>
                <Row className="justify-content-md-center" >
                    <Col lg="4" md="12">
                    <Card id="card-horaires" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Horaires <i className="fa-solid fa-clock"></i></Card.Title>
                                <Card.Text>
                                    <br/>
                                        Lundi : 9h -20h
                                    <br/> 
                                    <br/>
                                        Mardi : 9h - 20h
                                    <br/> 
                                    <br/>    
                                        Mercredi : 9h -20H
                                    <br/> 
                                    <br/>
                                        Jeudi : 9h - 20h
                                    <br/> 
                                    <br/> 
                                        Vendredi : 9h - 20h
                                    <br/> 
                                    <br/>    
                                        Samedi : 9h - 20h
                                    <br/> 
                                    <br/>
                                        Dimanche : 9h - 13h
                                </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    
                    <Col lg="4" md="12">
                    <br/>
                    <Card id="card-services" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Services<i className="fa-solid fa-cart-plus"></i></Card.Title>
                                <Card.Text>
                                    <br/>
                                        Livraison
                                    <br/> 
                                    <br/>
                                        Impression
                                    <br/> 
                                    <br/>
                                        Photomaton
                                </Card.Text>
                        </Card.Body>
                    </Card>
                    <br/>
                    <Card id="card-adresse" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Adresse<i className="fa-solid fa-cart-plus"></i></Card.Title>
                                <Card.Text>
                                    <br/>
                                        4 square Georgette Agutte
                                    <br/> 
                                    <br/>
                                        95210
                                    <br/> 
                                    <br/>
                                        Saint-Gratien
                                </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg="4" md ="12">
                    <Card id="card-contact" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Contact <i className="fa-solid fa-address-book"></i></Card.Title>
                                <Card.Text>
                                    <br/>
                                        Telephone : 01 34 17 48 46
                                    <br/> 
                                    <br/>
                                        Mail : diagonalisia@gmail.com
                                </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        <div id="footer">
                <p id="footer-text">
                Copyright © 2022, Tout droits reservés
                </p>
            </div>
        </>

    )
}