import React from "react";
import { Link, Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div
      id="app-container"
      className="font-Inter text-white bg-app flex flex-col md:flex-row min-h-screen gap-10 "
    >
      <Navbar />

      <main id="main-content">
        <h1>Main Content Area</h1>
        {/* Here you can render the content of the selected page */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
