import React from "react";




import ConnectionAdmin from "./ConnectionAdmin";

export default function SecurityControllerAdmin(props) {


    const backUrl = "http://34.155.239.217:8085/security";

    function fetchAdmin(username, password) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password})
        };
        fetch(backUrl + "/authorize", requestOptions)
            .then(response => response.json())
            .then(json => props.setAdmin({ 
                token: json.token,
                id: json.compte.id,
                compte: {
                    nom: json.compte.username
                }
            }));
    }

    return (
        <ConnectionAdmin fetchAdmin={(login, password) => fetchAdmin(login, password)} />
    ); 
}