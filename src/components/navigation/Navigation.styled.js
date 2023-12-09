import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ListMenu = styled.ul`
  display: flex;
  margin-left: 100px;
  gap: 50px;
  font-size: 24px;
  font-weight: 400;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;
