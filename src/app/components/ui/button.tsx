import React from "react";

export const Button: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
      {children}
    </button>
  );
};

