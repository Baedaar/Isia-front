import React, { useState } from "react";
import { Form, Button, Alert, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function FileUploadComponent({ token, adminUsername }) {
  const [file, setFile] = useState(null);
  const [docName, setDocName] = useState("");
  const [employeUsername, setEmployeUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  
  const history = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDocNameChange = (event) => {
    setDocName(event.target.value);
  };

  const handleEmployeUsernameChange = (event) => {
    setEmployeUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("docName", docName);
    formData.append("adminUsername", adminUsername);
    formData.append("employeUsername", employeUsername);

    try {
      const response = await fetch("http://34.155.239.217:8085//admin/uploadFile", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        setSuccessMessage('Fichier téléchargé avec succès!');
        // Reset the form values
        resetForm();
      } else {
        setErrorMessage('Une erreur s\'est produite lors du téléchargement du fichier.');
        throw new Error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const resetForm = () => {
    setFile(null);
    setDocName("");
    setEmployeUsername("");
    setErrorMessage(null);
  };

  return (
    <Container>
        <Navbar id="nav" expand="lg">
                    <Container>
                        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                 <Nav className="me-auto">
                        <Nav.Link id="nav-link-home" as={Link} to="/admin">
                     Retour
                        </Nav.Link>
                        {/* Add other Nav.Links here */}
                </Nav>
                    </Container>
        </Navbar>
        <div className="content">
      <Row className="justify-content-md-center">
        {/* Success message */}
        {successMessage && (
          <Alert variant="success" className="w-100 text-center">
            {successMessage}
            <Button onClick={() => history('/admin')}>Retour</Button>
          </Alert>
        )}
        {/* Error message */}
        {errorMessage && (
          <Alert variant="danger" className="w-100 text-center">
            {errorMessage}
            <Button onClick={resetForm}>Réessayer</Button>
          </Alert>
        )}
        <Col md="6">
          <h2 className="text-center">Upload File</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="file">
              <Form.Label>Select File:</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            <Form.Group controlId="docName">
              <Form.Label>Document Name:</Form.Label>
              <Form.Control type="text" value={docName} onChange={handleDocNameChange} />
            </Form.Group>
            <Form.Group controlId="employeUsername">
              <Form.Label>Employe Username:</Form.Label>
              <Form.Control type="text" value={employeUsername} onChange={handleEmployeUsernameChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Upload
            </Button>
          </Form>
        </Col>
      </Row>
      </div>
    </Container>
  );
}
