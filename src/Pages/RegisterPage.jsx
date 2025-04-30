import React from "react";
import Input from "../Components/Input.jsx";
import Button from "../Components/Button.jsx";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative">
      <div className="absolute top-0 md:top-1 left-0 md:left-1">
        <i
          className="fal fa-long-arrow-left text-text-contrast text-3xl cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="w-full p-2 lg:w-4/5">
        <h2 className="text-2xl lg:text-4xl font-bold text-text-contrast">
          Crea tu espacio personal
        </h2>
        <p className="text-text-contrast text-md mt-4 mb-8">
          Comienza tu viaje personal registrando una cuenta. Aquí podrás seguir
          tu progreso diario y acompañarte con música según tu ánimo.
        </p>
        <form action="" className="flex flex-col gap-2 lg:gap-4">
          <Input placeholder="Ingresa tu nombre" label="Nombre" />
          <Input placeholder="ejemplo@gmail.com" label="Correo electrónico" />
          <Input
            password
            placeholder="Crea una contraseña segura"
            label="Contraseña"
          />
          <Input
            password
            placeholder="Repite tu contraseña"
            label="Confirmar contraseña"
          />
          <Button label="Crear Cuenta" />
          <div className="flex flex-col lg:flex-row gap-2 w-full items-center justify-center mt-2">
            <p className="text-text-contrast text-md whitespace-nowrap">
              ¿Ya tienes una cuenta?
            </p>
            <Link
              className="text-primary hover:text-primary-hover text-md font-bold cursor-pointer whitespace-nowrap"
              to="/login"
            >
              Inicia sesión aquí.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
