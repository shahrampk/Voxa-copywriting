import { Route, Routes } from "react-router";
import PublicRoutes from "./routes/public.routes";
import Layout from "./layout/Layout";
import { NoPage } from "./pages";
function App() {
  const allRoutes = [...PublicRoutes];

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {allRoutes.map((route, index) => (
            <Route
              key={`${route.route}-${index}`}
              path={route.route}
              element={route.element}
            />
          ))}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
