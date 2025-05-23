import React, { useState } from "react";

const Input = React.forwardRef(
  ({ label, placeholder, password = false, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <>
        <p className="text-md text-text-contrast">{label}</p>
        <div className="relative">
          <input
            type={password ? (showPassword ? "text" : "password") : "text"}
            placeholder={placeholder}
            ref={ref}
            {...rest} // Esto incluye name, onChange, onBlur, value, etc.
            className="bg-white text-text w-full h-12 lg:h-14 text-md rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {password && (
            <div className="absolute right-2 lg:right-5 top-4 lg:top-4.5 z-10">
              <i
                className={`fad ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                } cursor-pointer text-text text-xl lg:text-2xl`}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          )}
        </div>
      </>
    );
  }
);

export default Input;
