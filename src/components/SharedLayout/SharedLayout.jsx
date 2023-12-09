import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../navigation/Navigation";
import { Container } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <header>
          <Navigation />
        </header>
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
