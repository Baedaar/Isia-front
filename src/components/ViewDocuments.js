import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'whatwg-fetch';

export default function DocumentTable({ employeUsername, token }) {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    fetch(`http://34.155.239.217:8085/employe/allDocuments?employeUsername=${employeUsername}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setDocuments(data))
      .catch(error => console.error(error));
  }, [employeUsername, token]);

  const handleDownload = () => {
    fetch(`http://34.155.239.217:8085/employe/download?docId=${selectedDocument.id}&employeUsername=${employeUsername}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = selectedDocument.docName || 'download';
        a.click();
      })
      .catch(error => console.error(error));
  };

  return (
    <Container>
      <Navbar id="nav" expand="lg">
                    <Container>
                        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                 <Nav className="me-auto">
                        <Nav.Link id="nav-link-home" as={Link} to="/employe">
                     Retour
                        </Nav.Link>
                        {/* Add other Nav.Links here */}
                </Nav>
                    </Container>
        </Navbar>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Document</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {documents.map(document => (
          <tr key={document.id}>
            <td>{document.docName}</td>
            <td>
              <Button variant="primary" onClick={() => setSelectedDocument(document)}>
                Selectionner
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
      <Button variant="success" disabled={!selectedDocument} onClick={handleDownload}>
      Télecharger
    </Button>
    </Table>
    </Container>
    
  );
}
