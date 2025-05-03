import React, { useEffect, useState } from "react";
import Input from "../../Components/Input.jsx";
import Button from "../../Components/Button.jsx";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthContext.jsx";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, clearErrors } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

  const onSubmit = async (values) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    setIsLoading(true);
    clearErrors();
    try {
      if (!emailRegex.test(values.email)) {
        toast.error("Ingresa un correo electrónico válido.");
        return;
      }
      if (!passwordRegex.test(values.password)) {
        toast.error(
          "La contraseña debe tener al menos 8 caracteres, una letra y un número."
        );
        return;
      }
      if (values.password !== values.confirmPassword) {
        toast.error("Las contraseñas no coinciden.");
        return;
      }

      await signup(values);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app/home");
      toast.success("Bienvenido a tu espacio personal.");
    }
  }, [isAuthenticated]);

  const onInvalid = (formErrors) => {
    if (
      formErrors.username ||
      formErrors.email ||
      formErrors.password ||
      formErrors.confirmPassword
    ) {
      toast.warning("Completa todos los campos antes de continuar.");
    }
  };

  useEffect(() => {
    if (registerErrors && registerErrors.length > 0) {
      registerErrors.forEach((error, i) => {
        toast.error(error, i);
      });
    }
  }, [registerErrors]);

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
          Comienza tu viaje personal registrando una cuenta.
        </p>
        <form className="flex flex-col gap-2">
          <Input
            placeholder="Ingresa tu nombre"
            label="Nombre"
            {...register("username", { required: true })}
          />
          <Input
            placeholder="ejemplo@gmail.com"
            label="Correo electrónico"
            {...register("email", { required: true })}
          />
          <Input
            password
            placeholder="Crea una contraseña segura"
            label="Contraseña"
            {...register("password", { required: true })}
          />
          <Input
            password
            placeholder="Repite tu contraseña"
            label="Confirmar contraseña"
            {...register("confirmPassword", { required: true })}
          />
          <Button
            loading={isLoading}
            label="Crear Cuenta"
            onClick={handleSubmit(onSubmit, onInvalid)}
          />
          <div className="flex flex-col lg:flex-row gap-2 w-full items-center justify-center mt-2">
            <p className="text-text-contrast text-md whitespace-nowrap">
              ¿Ya tienes una cuenta?
            </p>
            <Link
              className="text-primary hover:text-primary-hover text-md font-bold cursor-pointer whitespace-nowrap"
              to="/login"
            >
              Inicia sesión aquí
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
