import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <div className="form-group">
        <label>Nome</label>
        <input
          className="form-control"
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Sobrenome</label>
        <input
          className="form-control"
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>E-mail</label>
        <input
          className="form-control"
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Empresa</label>
        <input
          className="form-control"
          type="text"
          name="company"
          value={user.company}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Cargo</label>
        <input
          className="form-control"
          type="text"
          name="job"
          value={user.job}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Salário</label>
        <input
          className="form-control"
          type="number"
          min="0.00"
          max="100000000.00"
          step="0.01"
          name="salary"
          value={user.salary}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="btn btn-primary">Atualizar</button>
      <button
        className="btn btn-primary cancelButton"
        onClick={() => props.setEditing(false)}
      >
        Cancelar
      </button>
    </form>
  );
};

export default EditUserForm;
