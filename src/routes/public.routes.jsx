import { Dashboard, History, Settings, StyleDocx, Workspace } from "../pages";

const PublicRoutes = [
  {
    route: "/",
    element: <Dashboard />,
  },
  {
    route: "/history",
    element: <History />,
  },
  {
    route: "/style-docx",
    element: <StyleDocx />,
  },
  {
    route: "/settings",
    element: <Settings />,
  },
  {
    route: "/workspace",
    element: <Workspace />,
  },
];

export default PublicRoutes;
