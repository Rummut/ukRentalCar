import { NavLink, Outlet } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
            <Outlet />
          </ul>
        </nav>
      </header>
    </>
  );
};
