import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UpdateEmploye from "./UpdateEmploye";

export default function EmployePanel(props) {
  const [employe, setEmploye] = useState(props.employe);
  const navigate = useNavigate(); // get the navigate function

  useEffect(() => {
    setEmploye(props.employe);
  }, [props.employe]);

  function employeName() {
    console.log(employe);
    return employe != null ? `${employe.compte.nom} ${employe.compte.prenom}` : "Employé";
  }

  function handleLogout() {
    setEmploye(null); // remove admin state
    navigate("/"); // redirect to the login page
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
            <Button variant="link" onClick={handleLogout}>Déconnexion</Button>
            {/* Add other Nav.Links here */}
          </Nav>
        </Container>
      </Navbar>
      <div className="content">
      <UpdateEmploye employe={employe}/>
      </div>
    </div>
  );
}
