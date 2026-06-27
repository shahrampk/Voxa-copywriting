import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Header from "./Header";

const Layout = () => {
  return (
    <div id="app-container" className="flex flex-col md:flex-row h-screen">
      <Navbar />

      <main id="main-content" className="w-full overflow-scroll h-full">
        <Header />
        {/* Here you can render the content of the selected page */}
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
