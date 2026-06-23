import { Route, Routes } from "react-router";
import PublicRoutes from "./routes/public.routes";

function App() {
  const allRoutes = [...PublicRoutes];
  console.log(allRoutes);

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
