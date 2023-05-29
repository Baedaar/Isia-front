import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function UpdateEmploye(props) {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [numeroRue, setNumeroRue] = useState('');
    const [rue, setRue] = useState('');
    const [ville, setVille] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(props.employe) {
            setNom(props.employe.compte.nom);
            setPrenom(props.employe.compte.prenom);
            setNumeroRue(props.employe.adresse.numeroRue);
            setRue(props.employe.adresse.rue);
            setVille(props.employe.adresse.ville);
        }
    }, [props.employe]);

    const updateEmploye = (event) => {
        event.preventDefault();
        // Mise à jour de l'employé via API
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.employe.token}`
            },
            body: JSON.stringify({
                employeDto: { nom, prenom, password },
                adresseDto: { numeroRue, rue, ville }
            })
        };
        fetch(`http://34.155.239.217:8085/employe/update?username=${props.employe.compte.username}`, requestOptions)
            .then(response => {
                if (response.ok) {
                    alert("Employé mis à jour avec succès !");
                } else {
                    alert("Erreur lors de la mise à jour de l'employé");
                }
            });
    };

    return (
        <Form onSubmit={updateEmploye}>
            <Form.Group controlId="nom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" value={nom} onChange={e => setNom(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="prenom">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" value={prenom} onChange={e => setPrenom(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="numeroRue">
                <Form.Label>Numéro de rue</Form.Label>
                <Form.Control type="text" value={numeroRue} onChange={e => setNumeroRue(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="rue">
                <Form.Label>Rue</Form.Label>
                <Form.Control type="text" value={rue} onChange={e => setRue(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="ville">
                <Form.Label>Ville</Form.Label>
                <Form.Control type="text" value={ville} onChange={e => setVille(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">Mettre à jour</Button>
        </Form>
    );
}
