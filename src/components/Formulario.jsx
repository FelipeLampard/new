import React from "react";
import { useState } from "react";

const Formulario = ({ setAlert }) => {
  const [formInfo, setFormInfo] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const ValidarInformacion = (e) => {
    e.preventDefault();

    const { nombre, email, password, confirmPassword } = formInfo;
    if (!nombre || !email || !password || !confirmPassword) {
      setAlert({
        error: true,
        msg: "Completa todos los campos",
        color: "text-danger",
      });
      return;
    }

    if (password !== confirmPassword) {
      setAlert({
        error: true,
        msg: "Las contraseñas no coinciden",
        color: "text-danger",
      });
      return;
    }

    setAlert({
      error: true,
      msg: "Cuenta creada exitosamente",
      color: "text-success",
    });
    
    setFormInfo({
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const statusChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="register" onSubmit={ValidarInformacion}>
        <div className="inputs">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={statusChange}
            value={formInfo.nombre}
          />
        </div>
        <div className="inputs">
          <input
            type="email"
            name="email"
            placeholder="email@ejemplo.com"
            onChange={statusChange}
            value={formInfo.email}
          />
        </div>
        <div className="inputs">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={statusChange}
            value={formInfo.password}
          />
        </div>
        <div className="inputs">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirma tu Contraseña"
            onChange={statusChange}
            value={formInfo.confirmPassword}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
};

export default Formulario;
