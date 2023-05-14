import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children, token }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://34.155.239.217:8085/admin/allUsers', 
      {headers : {'Authorization' : `Bearer ${token}`,},});
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <UserContext.Provider value={{ users, token, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
}
