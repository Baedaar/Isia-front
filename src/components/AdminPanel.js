import React, { useState, useEffect } from "react";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UserTable from "./UserTable";
import UserContextProvider from "./UserContext";

export default function AdminPanel(props) {
  const [admin, setAdmin] = useState(props.admin);
  const navigate = useNavigate(); // get the navigate function

  useEffect(() => {
    setAdmin(props.admin);
  }, [props.admin]);

  function adminName() {
    console.log(admin);
    return admin && admin.compte ? admin.compte.nom : "Admin";
  }

  function handleLogout() {
    setAdmin(null); // remove admin state
    navigate("/"); // redirect to the login page
  }

  return (
    <div>
      <Navbar id="nav" expand="lg">
        <Container>
          <Navbar.Brand id="brand">{adminName()}</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link id="nav-link-home" as={Link} to="/admin/register">
                Enregister employé
            </Nav.Link>
            <Nav.Link id="nav-link-home" as={Link} to="/admin/upload">
                Enregistrer un document
            </Nav.Link>
            <Button variant="link" onClick={handleLogout}>Déconnexion</Button>
            {/* Add other Nav.Links here */}
          </Nav>
        </Container>
      </Navbar>
      {admin ? (
      <UserContextProvider token={admin.token}>
        <UserTable />
      </UserContextProvider>
    ) : (
      <div>Loading...</div>
    )}
    </div>
  );
}
