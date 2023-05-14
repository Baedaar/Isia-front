import React from "react";

import ConnectionEmp from "./ConnectionEmp";

export default function SecurityController(props) {

    const backUrl = "http://localhost:8085/security";

    function fetchEmploye(username, password) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password})
        };
        fetch(backUrl + "/authorize", requestOptions)
            .then(response => response.json())
            .then(json => props.setEmploye({ 
                token: json.token,
                id: json.compte.id,
                compte: {
                    nom: json.compte.nom,
                    prenom: json.compte.prenom
                }
            }));
    }

    return (
        <ConnectionEmp fetchEmploye={(login, password) => fetchEmploye(login, password)} />
    ); 
}