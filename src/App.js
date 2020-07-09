import React, { useState, Fragment } from "react";

import "./css/bootstrap.min.css";
import "./css/styles.css";

import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";

export default function App() {
  // Array dos Dados
  const usersData = [
    {
      id: 1,
      firstName: "João",
      lastName: "Pereira",
      email: "joaopereira@google.com",
      company: "Google",
      job: "Engenheiro de Software",
      salary: 14000
    },
    {
      id: 2,
      firstName: "Alice",
      lastName: "Souza",
      email: "alicesouza@facebook.com",
      company: "Facebook",
      job: "UX/UI Designer",
      salary: 11000
    },
    {
      id: 3,
      firstName: "José",
      lastName: "Oliveira",
      email: "joseoliveira@microsoft.com",
      company: "Microsoft",
      job: "Gerente de Projetos",
      salary: 16000
    },
    {
      id: 4,
      firstName: "Pedro",
      lastName: "Silva",
      email: "pedrosilva@amazon.com",
      company: "Amazon",
      job: "Estagiário",
      salary: 3000
    }
  ];

  // Estado vazio do usuário corrente inciail
  const emptyFormState = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    job: "",
    salary: ""
  };

  // Setando os estados
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(emptyFormState);
  const [editing, setEditing] = useState(false);

  // Operações do CRUD

  // Create user
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]); // Adiciona usuário no final do array.
  };

  // Update user
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user))); // Seleciona e substitui usuário
  };

  // Delete user
  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id)); // Seleciona e deleta usuário
  };

  // Efetiva a alteração do usuário
  const editRow = user => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      company: user.company,
      job: user.job,
      salary: user.salary
    });
  };

  return (
    <div className="App">
      <h1>CRUD ReactJS no CodeSandbox</h1>
      <div className="container">
        <h2>Salários de Profissionais de TI</h2>
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <Fragment>
                <h3>Alterar Usuário</h3>
                <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h3>Adicionar Usuário</h3>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )}
          </div>
          <div className="flex-large">
            <h3>Lista de Usuários</h3>
            <UserTable
              users={users}
              editRow={editRow}
              deleteUser={deleteUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
