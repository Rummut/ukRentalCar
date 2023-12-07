import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "../page/homePage/HomePage";
import { Catalog } from "../page/catalog/Catalog";
import { Favorite } from "../page/favorite/Favorite";
import { Navigation } from "./navigation/Navigation";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
