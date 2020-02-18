import React, { Fragment, useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    last_name: ""
  });

  const handleInputChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(data.name + " " + data.last_name);
  };

  return (
    <Fragment>
      <h1>Formulario</h1>
      <form className="row" onClick={handleSubmit}>
        <div className="col-md-3">
          <input
            placeholder="Ingrese nombre"
            className="form-control"
            type="text"
            name="name"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            placeholder="Ingrese apellido"
            className="form-control"
            type="text"
            name="last_name"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
