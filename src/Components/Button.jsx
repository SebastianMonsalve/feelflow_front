import React from "react";

const Button = ({ label, onClick, loading = false }) => {
  return (
    <button
      type="button"
      disabled={loading}
      className={`bg-primary w-full h-12 lg:h-14 text-text-contrast text-lg font-bold rounded-xl mt-4 lg:mt-8 ${
        loading
          ? "opacity-50 cursor-wait"
          : "cursor-pointer hover:bg-primary-hover"
      }`}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {loading ? (
        <>
          <i className="far fa-fan animate-spin mr-2 text-xl" />
          Cargando...
        </>
      ) : (
        <>{label}</>
      )}
    </button>
  );
};

export default Button;
