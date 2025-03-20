import React from "react";

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input {...props} className="w-full border rounded-xl p-2 text-center focus:ring focus:border-blue-500" />
  );
};
