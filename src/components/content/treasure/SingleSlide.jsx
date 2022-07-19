import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const SingleSlide = ({ content }) => {
  return (
    <StyledSlide>
      <StyledParagraph>{content}</StyledParagraph>
    </StyledSlide>
  );
};

export default SingleSlide;

const StyledSlide = styled.article`
  max-width: 160px;
  min-height: 8.3rem;
  background-image: linear-gradient(#000000 0%, #545454 100%);
  border-top: 2px solid #fdd54b;
  padding: 0.5rem;

  @media (min-width: 640px) {
    min-width: 13rem;
  }
  @media (min-width: 840px) {
    min-width: 14rem;
  }
  @media (min-width: 1024px) {
    min-width: 16rem;
  }
  @media (min-width: 1280px) {
    min-width: 21rem;
  }
`;

const StyledParagraph = styled.p`
  font-size: 0.6rem;
  @media (min-width: 375px) {
    font-size: 0.65rem;
  }
  @media (min-width: 425px) {
    font-size: 0.7rem;
  }
  @media (min-width: 768px) {
    font-size: .8rem;
  }
  @media (min-width: 1024px) {
    font-size: .9rem;
  }
  @media (min-width: 1280px) {
    font-size: 1rem;
  }
`;
