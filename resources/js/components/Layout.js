import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { GlobalStorage } from "../contexts/GlobalStorage";

const Layout = ({ children }) => {
  return (
    <GlobalStorage>
      <Header />
      <div className="flex h-screen pt-20">
        <Sidebar />
        <main className="bg-gray-200 flex-1">{children}</main>
      </div>
    </GlobalStorage>
  );
};

export default Layout;
