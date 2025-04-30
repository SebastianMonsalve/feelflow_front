import React from "react";
import Input from "../Components/Input.jsx";
import Button from "../Components/Button.jsx";

const LoginPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full p-8 lg:w-4/5">
        <h2 className="text-4xl font-bold text-text-contrast">
          Bienvenido de nuevo
        </h2>
        <p className="text-text-contrast text-lg mt-4 mb-8 text-balance">
          Conecta con tu diario emocional. Registra tu día, tu ánimo, tus metas
          y acompáñate con la música que elegiste.
        </p>
        <form action="" className="flex flex-col gap-4">
          <Input
            placeholder="Ingresa tu correo electrónico"
            label="Correo electrónico"
          />
          <Input
            password
            placeholder="Escribe tu contraseña"
            label="Contraseña"
          />
          <Button label="Iniciar Sesión" />
          <div className="flex flex-col lg:flex-row gap-2 w-full items-center justify-center mt-8">
            <p className="text-text-contrast text-lg whitespace-nowrap">
              ¿Olvidaste tu contraseña?
            </p>
            <button className="text-primary hover:text-primary-hover text-lg font-bold cursor-pointer whitespace-nowrap">
              Recuperarla aquí
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full items-center justify-center mt-2">
            <p className="text-text-contrast text-lg whitespace-nowrap">
              ¿No tienes cuenta?
            </p>
            <button className="text-primary hover:text-primary-hover text-lg font-bold cursor-pointer whitespace-nowrap">
              Regístrate gratis.
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
