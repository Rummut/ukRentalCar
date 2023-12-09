import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import("../page/homePage/HomePage"));
const Catalog = lazy(() => import("../page/catalog/Catalog"));
const Favorite = lazy(() => import("../page/favorite/Favorite"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
