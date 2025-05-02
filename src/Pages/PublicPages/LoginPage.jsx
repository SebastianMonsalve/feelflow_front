import React, { useEffect } from "react";
import Input from "../../Components/Input.jsx";
import Button from "../../Components/Button.jsx";
import { useAuth } from "../../Context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, clearErrors } = useForm();
  const { signin, errors: loginErrors } = useAuth();

  const onSubmit = async (values) => {
    clearErrors();
    signin(values);
  };
  const onInvalid = (formErrors) => {
    if (formErrors.email || formErrors.password) {
      toast.warning("Completa todos los campos antes de continuar.");
    }
  };
  useEffect(() => {
    if (loginErrors && loginErrors.length > 0) {
      loginErrors.forEach((error, i) => {
        toast.error(error, i);
      });
    }
  }, [loginErrors]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative">
      <div
        className="absolute top-0 md:top-1 left-0 md:left-1"
        onClick={() => navigate(-1)}
      >
        <i className="fal fa-long-arrow-left text-text-contrast text-3xl cursor-pointer" />
      </div>
      <div className="w-full p-2 lg:w-4/5">
        <h2 className="text-2xl lg:text-4xl font-bold text-text-contrast">
          Bienvenido de nuevo
        </h2>
        <p className="text-text-contrast text-md mt-4 mb-8">
          Conecta con tu diario emocional.
        </p>
        <form className="flex flex-col gap-2 lg:gap-4">
          <Input
            placeholder="Ingresa tu correo electrónico"
            label="Correo electrónico"
            {...register("email", { required: true })}
          />
          <Input
            password
            placeholder="Escribe tu contraseña"
            label="Contraseña"
            {...register("password", { required: true })}
          />
          <Button
            type="button"
            label="Iniciar Sesión"
            onClick={handleSubmit(onSubmit, onInvalid)}
          />
          <div className="flex flex-col lg:flex-row gap-2 w-full items-center justify-center mt-4 lg:mt-8">
            <p className="text-text-contrast text-md whitespace-nowrap">
              ¿Olvidaste tu contraseña?
            </p>
            <Link className="text-primary hover:text-primary-hover text-md font-bold cursor-pointer whitespace-nowrap">
              Recuperarla aquí
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full items-center justify-center mt-2">
            <p className="text-text-contrast text-md whitespace-nowrap">
              ¿No tienes cuenta?
            </p>
            <Link
              className="text-primary hover:text-primary-hover text-md font-bold cursor-pointer whitespace-nowrap"
              to="/register"
            >
              Regístrate gratis.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
