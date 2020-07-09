import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const UserTable = props => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">Nome Completo</th>
        <th scope="col" className="mailField">
          E-mail
        </th>
        <th scope="col" className="companyField">
          Empresa
        </th>
        <th scope="col" className="jobField">
          Cargo
        </th>
        <th scope="col" className="salaryField">
          Salário (R$)
        </th>
        <th scope="col">Ações</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.firstName + " " + user.lastName}</td>
            <td className="mailField">{user.email}</td>
            <td className="companyField">{user.company}</td>
            <td className="jobField">{user.job}</td>
            <td className="salaryField">{user.salary}</td>
            <td>
              <div className="tableButtons">
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                  className="btn btn-primary editButton"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  onClick={() => props.deleteUser(user.id)}
                  className="btn btn-primary deleteButton"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={6}>Sem registros</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
