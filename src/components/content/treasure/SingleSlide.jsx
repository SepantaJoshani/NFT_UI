import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const SingleSlide = ({ content }) => {
  return (
    <StyledSlide>
      <Typography variant="body2">{content.substring(0, 200)}</Typography>
    </StyledSlide>
  );
};

export default SingleSlide;

const StyledSlide = styled.article`
    max-width: 160px;
  background-image: linear-gradient(#000000 0%, #545454 100%);
  border-top: 2px solid #fdd54b;
  padding: 0.5rem;

  @media (min-width:640px) {
    min-width: 13rem;
    
  }
  @media (min-width:840px) {
    min-width: 14rem;
    
  }
  @media (min-width:1024px) {
    min-width: 16rem;
    
  }
  @media (min-width:1280px) {
    min-width: 21rem;
    
  }
 


`;
