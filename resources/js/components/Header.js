import React, { useState } from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { FaUser, FaSignOutAlt, FaUserCog, FaBars } from "react-icons/fa";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const { user } = usePage().props;

  return (
    <header className="bg-white">
      <nav className="h-20 container mx-auto flex items-center justify-between px-4 sm:px-0">
        <FaBars className="text-3xl text-blue-600 cursor-pointer" />
        <div className="flex items-center gap-3 relative">
          <p>Olá, {user.name}</p>
          <div
            onClick={() => setDropDown(!dropDown)}
            className="flex items-center justify-center h-10 w-10 line bg-gray-200 rounded-full cursor-pointer"
          >
            <FaUser className="text-gray-500 text-2xl" />
          </div>
          {dropDown && (
            <div
              className={`${
                dropDown && "animate-dropDown"
              } absolute top-11 right-0 w-44 bg-gray-200 rounded text-gray-500 p-2`}
            >
              <p className="flex items-center justify-end gap-2 pr-1 rounded cursor-pointer transition-all hover:bg-blue-500 hover:text-white">
                <span className="text-lg">Configurações</span>{" "}
                <FaUserCog className="text-xl" />
              </p>
              <p className="flex items-center justify-end gap-2 pr-1 rounded cursor-pointer transition-all hover:bg-blue-500 hover:text-white">
                <span className="text-lg">Sair</span>{" "}
                <FaSignOutAlt className="text-xl" />
              </p>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
