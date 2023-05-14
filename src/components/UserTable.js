import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from './UserContext';

export default function UserTable() {
  const { users } = useContext(UserContext);

  const renderAddress = (address) => {
    if (!address) return '-';
    const { numeroRue, rue, ville } = address;
    return `${numeroRue} ${rue}, ${ville}`;
  };

  const renderAuthorities = (authorities) => {
    if (!authorities || authorities.length === 0) return '-';
    return authorities.map((auth) => auth.authority).join(', ');
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Username</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Adresse</th>
          <th>Authorities</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map((user, index) => (
          <tr key={index}>
            <td>{user.username}</td>
            <td>{user.nom}</td>
            <td>{user.prenom}</td>
            <td>{user.adresse && `${user.adresse.numeroRue} ${user.adresse.rue}, ${user.adresse.ville}`}</td>
            <td>{user.authorities.map((authority) => authority.name).join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
