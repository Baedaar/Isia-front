import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EmployePanel(props) {
  const [employe, setEmploye] = useState(props.employe);

  useEffect(() => {
    setEmploye(props.employe);
  }, [props.employe]);

  function employeName() {
    console.log(employe);
    return employe != null ? `${employe.compte.nom} ${employe.compte.prenom}` : "Employé";
  }

  return (
    <div>
      <Navbar id="nav" expand="lg">
        <Container>
          <Navbar.Brand id="brand">{employeName()}</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link id="nav-link-home" as={Link} to="/employe/documents">
              Mes Documents
            </Nav.Link>
            {/* Add other Nav.Links here */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
