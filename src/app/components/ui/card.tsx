import React from "react";

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-96 p-6 shadow-lg rounded-2xl bg-white text-center">
      {children}
    </div>
  );
};

