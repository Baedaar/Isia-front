import React, { useState } from "react";
import { Alert, Card, Col, Form, InputGroup, Nav, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function ConnectionEmp(props) {
    const [fields, setFields] = useState({ login: "", password: "" });
    const [error, setError] = useState("");
    const history = useNavigate();

    const handleSubmit = async () => {
        const success = await props.fetchEmploye(fields.login, fields.password);
        if (success) {
            history("/employe");
        } else {
            setError("L'identifiant ou le mot de passe est incorrect");
        }
    };

    return (
        <Row className="d-flex justify-content-center p-3 pt-5">
            <Card className="max-width-50-rem p-0">
                <Card.Header className="text-center">Authentification</Card.Header>
                {error && <Alert variant="danger">{error}</Alert>}
                <Row className="pt-4 ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output>Identifiant</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpLogin">
                                <i className="fa fa-user"></i>
                            </InputGroup.Text>
                            <Form.Control 
                                type="text"
                                aria-describedby="inpLogin"
                                placeholder="Veuillez entrer un identifiant"
                                value={fields.login}
                                onChange={form => setFields({...fields, login: form.target.value})}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output>Mot de passe</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpPassword">
                                <i className="fa fa-key"></i>
                            </InputGroup.Text>
                            <Form.Control 
                                type="password" 
                                aria-describedby="inpPassword"
                                placeholder="Veuillez entrer un mot de passe"
                                value={fields.password}
                                onChange={form => setFields({...fields, password: form.target.value})}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="pb-3 ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} lg={4} className="p-1">
                        <button
                            className="btn btn-dark w-100 text-white"
                            onClick={handleSubmit}
                        >
                            Connexion
                        </button>
                    </Col>
                </Row>
            </Card>
        </Row>
    );
}
