import React, { useState } from "react";

const AddUserForm = props => {
  const emptyFormState = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    job: "",
    salary: ""
  };
  const [user, setUser] = useState(emptyFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (
          !user.firstName ||
          !user.lastName ||
          !user.email ||
          !user.company ||
          !user.job ||
          !user.salary
        )
          return;

        props.addUser(user);
        setUser(emptyFormState);
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
      <button className="btn btn-primary">Adicionar</button>
    </form>
  );
};

export default AddUserForm;
