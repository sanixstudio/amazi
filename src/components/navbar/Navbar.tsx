import React from "react";

const Navbar = () => {
  return (
    <nav className="border p-2 flex gap-4 justify-between">
      <a href="/" className="text-2xl uppercase font-bold">
        Adi
      </a>
      <div className="flex gap-4">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
};

export default Navbar;
