import React from "react";
import ConnectionEmp from "./ConnectionEmp";

export default function SecurityController(props) {

    const backUrl = "http://34.155.239.217:8085/security";

    function fetchEmploye(username, password) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password})
        };
        return fetch(backUrl + "/authorize", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to authenticate');
                }
                return response.json();
            })
            .then(json => {
                props.setEmploye({ 
                    token: json.token,
                    id: json.compte.id,
                    compte: {
                        username: json.compte.username,
                        nom: json.compte.nom,
                        prenom: json.compte.prenom
                    },
                    adresse: {
                        id: json.compte.adresse.id,
                        numeroRue: json.compte.adresse.numeroRue,
                        rue: json.compte.adresse.rue,
                        ville: json.compte.adresse.ville
                    }
                });
                return true;
            })
            .catch(error => {
                console.error('Failed to login:', error);
                return false;
            });
    }

    return (
        <ConnectionEmp fetchEmploye={(login, password) => fetchEmploye(login, password)} />
    ); 
}
