import React, { useState } from 'react';

import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/fontawsome.all.min.css"
import { Alert, Button, Col, Container, Form, FormControl, FormGroup, FormLabel, InputGroup, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function EmployeeForm(props) {
    const [formData, setFormData] = useState({
        employeDto: {
          password: '',
          nom: '',
          prenom: '',
          dateNaissance: '',
        },
        adresseDto: {
          numeroRue: '',
          rue: '',
          ville: '',
        },
        lieuNaissanceDto: {
          paysNaissance: '',
          villeNaissance: '',
        },
        roles: [],
      });
  
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
  
      const history = useNavigate();
  
      const handleChange = (event) => {
        const { name, value } = event.target;
        const keys = name.split('.');
        if (keys.length === 2) {
          setFormData((prevState) => ({
            ...prevState,
            [keys[0]]: {
              ...prevState[keys[0]],
              [keys[1]]: value,
            },
          }));
        }
      };

      const resetForm = () => {
        setFormData({
            employeDto: {
                password: '',
                nom: '',
                prenom: '',
                dateNaissance: '',
            },
            adresseDto: {
                numeroRue: '',
                rue: '',
                ville: '',
            },
            lieuNaissanceDto: {
                paysNaissance: '',
                villeNaissance: '',
            },
            roles: [],
        });
        setErrorMessage(null);
    };
  
      const handleSubmit = (event) => {
        event.preventDefault();
        const token = props.token;
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        };
  
        fetch('http://34.155.239.217:8085/security/admin/register', requestOptions)
          .then(response => response.json())
          .then(json => {
            if (json.compte) {
              setSuccessMessage(`L'employé ${json.compte.username} a été créé avec succès.`);
              setErrorMessage('');
            } else {
              setSuccessMessage('');
              setErrorMessage('Échec de la création de l\'employé. Veuillez réessayer.');
            }
          })
          .catch(err => {
            console.error(err);
            setSuccessMessage('');
            setErrorMessage('Une erreur est survenue lors de la création de l\'employé.');
          });
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
                {/* Success message */}
            {successMessage && (
                <Row>
                    <Col>
                        <Alert variant="success" className="d-flex justify-content-between align-items-center">
                            {successMessage}
                            <Button onClick={() => history('/admin')}>Retour</Button>
                        </Alert>
                    </Col>
                </Row>
            )}

            {/* Error message */}
            {errorMessage && (
                <Row>
                    <Col>
                        <Alert variant="danger" className="d-flex justify-content-between align-items-center">
                            {errorMessage}
                            <Button onClick={resetForm}>Reessayer</Button>
                        </Alert>
                    </Col>
                </Row>
            )}

            <Row>
                <Col xs={12} sm={10} md={8} lg={6} className="mx-auto">
                    <Form onSubmit={handleSubmit}>
                    <h2>Formulaire employé</h2>
                    <FormGroup>
                      <FormLabel for="employeDto.password">Mot de passe :</FormLabel>
                      <FormControl
                        type="password"
                        name="employeDto.password"
                        id="employeDto.password"
                        value={formData.employeDto.password}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel for="employeDto.nom">Nom :</FormLabel>
                      <FormControl
                        type="text"
                        name="employeDto.nom"
                        id="employeDto.nom"
                        value={formData.employeDto.nom}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel for="employeDto.prenom">Prénom :</FormLabel>
                      <FormControl
                        type="text"
                        name="employeDto.prenom"
                        id="employeDto.prenom"
                        value={formData.employeDto.prenom}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel for="employeDto.dateNaissance">Date de naissance :</FormLabel>
                      <FormControl
                        type="date"
                        name="employeDto.dateNaissance"
                        id="employeDto.dateNaissance"
                        value={formData.employeDto.dateNaissance}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel for="adresseDto.numeroRue">Numéro de rue :</FormLabel>
                      <FormControl
                        type="text"
                        name="adresseDto.numeroRue"
                        id="adresseDto.numeroRue"
                        value={formData.adresseDto.numeroRue}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel for="adresseDto.rue">Rue :</FormLabel>
                      <FormControl
                        type="text"
                        name="adresseDto.rue"
                        id="adresseDto.rue"
                        value={formData.adresseDto.rue}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel for="adresseDto.ville">Ville :</FormLabel>
                      <FormControl
                        type="text"
                        name="adresseDto.ville"
                        id="adresseDto.ville"
                        value={formData.adresseDto.ville}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel for="lieuNaissanceDto.paysNaissance">Pays de naissance :</FormLabel>
                      <FormControl
                        type="text"
                        name="lieuNaissanceDto.paysNaissance"
                        id="lieuNaissanceDto.paysNaissance"
                        value={formData.lieuNaissanceDto.paysNaissance}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel for="lieuNaissanceDto.villeNaissance">Ville de naissance :</FormLabel>
                      <FormControl
                        type="text"
                        name="lieuNaissanceDto.villeNaissance"
                        id="lieuNaissanceDto.villeNaissance"
                        value={formData.lieuNaissanceDto.villeNaissance}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel for="exampleSubmit" />
                      <Button color="primary" type="submit">
                        Envoyer
                      </Button>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Container>
          );
        };
