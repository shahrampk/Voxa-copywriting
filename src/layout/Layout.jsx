import React from "react";
import { Link, Outlet } from "react-router";
import Navbar from "./Navbar";
import Header from "./Header";

const Layout = () => {
  return (
    <div
      id="app-container"
      className="font-Inter text-white bg-app flex flex-col md:flex-row min-h-screen gap-2 "
    >
      <Navbar />

      <main id="main-content" className="p-4 w-full flex flex-col gap-5">
        <Header />
        {/* Here you can render the content of the selected page */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
