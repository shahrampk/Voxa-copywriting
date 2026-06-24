import { Dashboard, History, Hooks, Settings, StyleDocx, Workspace } from "../pages";

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
  },{
    route: "/hooks",
    element: <Hooks />,
  },
  {
    route: "/workspace",
    element: <Workspace />,
  },
];

export default PublicRoutes;
