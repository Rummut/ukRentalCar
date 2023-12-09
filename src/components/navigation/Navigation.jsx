import { ListMenu, StyledNavLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <nav>
      <ListMenu>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/favorite">Favorites</StyledNavLink>
        </li>
      </ListMenu>
    </nav>
  );
};
