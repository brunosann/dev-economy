import React from "react";
import {
  FaHome,
  FaHistory,
  FaChartLine,
  FaPiggyBank,
  FaDonate,
} from "react-icons/fa";
import { GlobalContext } from "../contexts/GlobalStorage";

const Sidebar = () => {
  const { sidebar } = React.useContext(GlobalContext);

  return (
    <>
      {sidebar && (
        <aside
          className={`${
            sidebar && "animate-sidebar"
          } bg-white absolute w-full sm:w-auto`}
        >
          <nav>
            <ul className="flex gap-4 flex-col mx-8 mt-8">
              <li className="flex gap-2 items-center font-semibold text-gray-500">
                <span className="bg-gray-200 p-2 rounded">
                  <FaHome className="text-3xl text-gray-500" />
                </span>
                Dashboard
              </li>
              <li className="flex gap-2 items-center font-semibold text-gray-500">
                <span className="bg-gray-200 p-2 rounded">
                  <FaHistory className="text-3xl text-gray-500" />
                </span>
                Histórico
              </li>
              <li className="flex gap-2 items-center font-semibold text-gray-500">
                <span className="bg-gray-200 p-2 rounded">
                  <FaChartLine className="text-3xl text-gray-500" />
                </span>
                Receitas
              </li>
              <li className="flex gap-2 items-center font-semibold text-gray-500">
                <span className="bg-gray-200 p-2 rounded">
                  <FaDonate className="text-3xl text-gray-500" />
                </span>
                Despesa Fixa
              </li>
              <li className="flex gap-2 items-center font-semibold text-gray-500">
                <span className="bg-gray-200 p-2 rounded">
                  <FaPiggyBank className="text-3xl text-gray-500" />
                </span>
                Poupador
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
