import React, { useEffect, useState } from "react";
import { Table, Container, Button, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ViewDocuments(props) {

    const [employe, setEmploye] = useState(props.employe);

  useEffect(() => {
    setEmploye(props.employe);
  }, [props.employe]);

  function employeName() {
    console.log(employe);
    return employe != null ? `${employe.compte.nom} ${employe.compte.prenom}` : "Employé";
  }


  // Fetch the documents from the database here
  const documents = [
    {
        id: 1,
        title: "Document 1",
        category: "Category 1",
        content: new Blob(["Example content for Document 1"], { type: "text/plain" }),
      },
      {
        id: 2,
        title: "Document 2",
        category: "Category 2",
        content: new Blob(["Example content for Document 2"], { type: "text/plain" }),
      },
  ];
  const downloadDocument = (doc) => {
    const url = URL.createObjectURL(doc.content);
    const link = document.createElement("a");
    link.href = url;
    link.download = doc.title;
    link.click();
    URL.revokeObjectURL(url);
  };


  return (
    <div>
        <Navbar id="nav" expand="lg">
        <Container>
          <Navbar.Brand id="brand">{employeName()}</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link id="nav-link-home" as={Link} to="/employe">
              Retour
            </Nav.Link>
            {/* Add other Nav.Links here */}
          </Nav>
        </Container>
      </Navbar>
      <h2>Documents</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.title}</td>
              <td>{doc.category}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => downloadDocument(doc)}
                >
                  Download
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
