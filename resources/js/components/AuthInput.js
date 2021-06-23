import React from "react";

const AuthInput = ({ label, id, value, error, ...props }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="text-sm font-semibold text-gray-500">
        {label}
      </label>
      <input id={id} {...props} className="auth-input" value={value} />
      {error && <span className="text-sm text-red-400">{error}</span>}
    </div>
  );
};

export default AuthInput;
