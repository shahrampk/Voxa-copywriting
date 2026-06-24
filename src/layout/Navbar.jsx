import {
  AsideFooter,
  AsideNavbar,
  Logo,
} from "../shared/components/sidebar/index.js";
import {
  BookOpenText,
  History,
  LayoutGrid,
  MousePointerClick,
  Settings,
  WandSparkles,
} from "lucide-react";

const Navbar = () => {
  const navLinks = [
    {
      path: "/",
      linkName: "Dashboard",
      icon: <LayoutGrid size={20} strokeWidth={2} />,
    },
    {
      path: "/workspace",
      linkName: "Workspace",
      icon: <WandSparkles size={20} strokeWidth={2} />,
    },
    {
      path: "/style-docx",
      linkName: "StyleDocx",
      icon: <BookOpenText size={20} strokeWidth={2} />,
    },

    {
      path: "/hooks",
      linkName: "Hooks",
      icon: <MousePointerClick size={20} strokeWidth={2} />,
    },
    {
      path: "/history",
      linkName: "History",
      icon: <History size={20} strokeWidth={2} />,
    },
  ];
  return (
    <aside
      id="sidebar"
      className="bg-sidebar w-55 p-4 flex flex-col justify-between gap-7"
    >
      <Logo />
      <AsideNavbar navLinks={navLinks} />
      <AsideFooter />
    </aside>
  );
};

export default Navbar;
