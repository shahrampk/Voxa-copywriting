import { NavLink } from "react-router";

const AsideNavbar = ({navLinks}) => {
  return (
    <nav className="h-full">
      <ul className="flex flex-col gap-1">
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <NavLink
              to={navLink.path}
              className="flex items-center gap-2 text-md px-3 py-2 hover:bg-accent-deep rounded-lg transition-colors duration-200"
            >
              {navLink.icon} {navLink.linkName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AsideNavbar;
