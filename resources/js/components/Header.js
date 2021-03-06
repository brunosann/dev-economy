import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { FaUser, FaSignOutAlt, FaUserCog, FaBars } from "react-icons/fa";
import { GlobalContext } from "../contexts/GlobalStorage";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const { user } = usePage().props;
  const { setSidebar } = React.useContext(GlobalContext);

  return (
    <header className="bg-white shadow-lg absolute w-full">
      <nav className="h-20 max-w-5xl mx-auto px-2 sm:px-4 md:px-8 xl:px-0 flex items-center justify-between">
        <a href="#">
          <FaBars
            onClick={() => setSidebar((old) => !old)}
            className="text-3xl text-blue-600 cursor-pointer"
          />
        </a>
        <div className="flex items-center gap-3 relative">
          <p className="font-semibold text-gray-700">Olá, {user.name}</p>
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
              } absolute top-11 right-0 w-44 z-10 bg-gray-300 rounded text-gray-500 p-2`}
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
