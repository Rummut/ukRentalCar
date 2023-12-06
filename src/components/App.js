import { Route, Routes } from "react-router-dom";
import "./App.css";

export const App = () => {
  <Routes>
    <Route path="/">
      <Route index></Route>
      <Route path="/catalog"></Route>
      <Route path="/favorites"></Route>
    </Route>
  </Routes>;
};

export default App;
