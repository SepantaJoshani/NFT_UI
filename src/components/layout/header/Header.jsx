import styled from "@emotion/styled";
import React from "react";
import { maxWidth, paddingWrapper } from "../../common";

const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

export default Header;

const StyledHeader = styled.header`
  ${maxWidth}
  ${paddingWrapper}
`;
