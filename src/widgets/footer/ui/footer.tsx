import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="grid content-evenly justify-items-center bg-blue-300">
      <p className="items-end text-center text-xs">
        Develop and Disigned by Chunl3e666
      </p>
      <p className="text-xs  ">Copyright {year}</p>
    </footer>
  );
};
