import React from "react";
import Button from "../../Components/Button.jsx";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative">
      <div className="absolute top-0 md:top-1 left-0 md:left-1">
        <h2 className="text-text-contrast text-lg">FeelFlow</h2>
      </div>
      <div className="w-full p-2 lg:w-4/5">
        <div className="w-full h-auto flex justify-center items-center mb-2 lg:hidden">
          <img
            src="/Emojis.svg"
            alt="Image"
            className="w-[250px]"
            draggable="false"
          />
        </div>
        <h2 className="text-2xl lg:text-4xl font-bold text-text-contrast">
          Tu día merece ser recordado
        </h2>
        <p className="text-text-contrast text-md lg:text-lg mt-4 mb-8">
          En FeelFlow podrás reflexionar cada noche, registrar tus metas
          cumplidas, elegir cómo te sentiste y guardar esa canción que te
          representa. Transforma cada día en una pequeña victoria personal.
        </p>
        <Button label="Comienza tu viaje" onClick={() => navigate("/login")} />
      </div>
    </div>
  );
};

export default Welcome;
