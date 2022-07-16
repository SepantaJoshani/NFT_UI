import styled from "@emotion/styled";
import React from "react";
import { maxWidth, paddingWrapper } from "../common";
import { Footer, Header } from "./index";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

const Main = styled.main`
  min-height: 100vh;
  ${maxWidth}
  ${paddingWrapper}
`;
