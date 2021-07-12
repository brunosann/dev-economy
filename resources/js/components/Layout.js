import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Header handleSidebar={setSidebar} />
      <main className="flex h-screen pt-20">
        <Sidebar showSidebar={sidebar} />
        <section className="bg-gray-200 flex-1">{children}</section>
      </main>
    </>
  );
};

export default Layout;
