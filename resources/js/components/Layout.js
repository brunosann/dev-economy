import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex h-screen pt-20">
        <Sidebar />
        <section className="bg-gray-200 flex-1">{children}</section>
      </main>
    </>
  );
};

export default Layout;
