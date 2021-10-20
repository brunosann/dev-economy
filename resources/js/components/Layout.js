import React from "react";
import { Toaster } from "react-hot-toast";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { GlobalStorage } from "../contexts/GlobalStorage";

const Layout = ({ children }) => {
  return (
    <GlobalStorage>
      <Toaster
        containerStyle={{ marginTop: "75px" }}
        toastOptions={{
          className: "mx-auto sm:mx-0",
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
        position="top-right"
        reverseOrder={false}
      />
      <Header />
      <div className="flex h-screen pt-20">
        <Sidebar />
        <main className="bg-gray-200 flex-1 overflow-auto">{children}</main>
      </div>
    </GlobalStorage>
  );
};

export default Layout;
