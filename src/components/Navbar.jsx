import React from "react";

const Navbar = () => {
  return (
    <nav className="pl-[10%] pr-[10%] w-full bg-gray-600 text-white p-2 fixed top-0 left-0 flex items-center justify-between z-10">
      <h1 className="text-red-400 text-4xl">Dojo-Blog</h1>
      <ul className="flex items-center justify-center gap-x-10">
        <li className="">Home</li>
        <li className="">Favourite</li>
        <li>
          <button className="rounded-md outline-0 cursor-pointer bg-white text-black p-3 text-sm">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
