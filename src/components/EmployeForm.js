import React, { useState } from 'react';

import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/fontawsome.all.min.css"
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, InputGroup, Row } from 'react-bootstrap';

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
          
            fetch('http://localhost:8085/security/admin/register',requestOptions);
        };
        return (
            <Container>
              <Row>
                <Col md={{ size: 6, offset: 3 }}>
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
