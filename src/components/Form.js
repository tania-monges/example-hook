import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

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

  /* const handleSubmit = e => {
    e.preventDefault();
    console.log(data.name + " " + data.last_name);
  };*/

  return (
    <Fragment>
      <h1>Formulario</h1>
      <form className="row" onClick={handleSubmit(onSubmit)}>
        <div className="col-md-3">
          <input
            placeholder="Ingrese nombre"
            className="form-control"
            type="text"
            name="name"
            onChange={handleInputChange}
            ref={register({
              required: { value: true, message: "Nombre obligatorio" }
            })}
          ></input>
          <span className="text-danger text-small d-block mb-2">
            {errors?.name?.message}
          </span>
        </div>
        <div className="col-md-3">
          <input
            placeholder="Ingrese apellido"
            className="form-control"
            type="text"
            name="last_name"
            onChange={handleInputChange}
            ref={register({
              required: { value: true, message: "Apellido obligatorio" }
            })}
          ></input>
          <span className="text-danger text-small d-block mb-2">
            {errors?.last_name?.message}
          </span>
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
