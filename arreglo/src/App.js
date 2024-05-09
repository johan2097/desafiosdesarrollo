import React, { useState } from 'react';


function UserList() {
 
  const [users, setUsers] = useState([
    { id: 1, name: 'Juan' },
    { id: 2, name: 'María' },
    { id: 3, name: 'Pedro' }
  ]);


  const [newUserName, setNewUserName] = useState('');

  
  const handleNameChange = (event) => {
    setNewUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newUserName.trim() !== '') {

      const newUser = {
        id: Date.now(),
        name: newUserName.trim()
      };

      setUsers([...users, newUser]);

      setNewUserName('');
    }
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
   
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newUserName}
          onChange={handleNameChange}
          placeholder="Ingrese un nuevo nombre de usuario"
        />
        <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  );
}

export default UserList;
