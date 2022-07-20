import React from "react";
import Typography from "@mui/material/Typography";
import { Hat, TreasureBox } from "../../../assets";
import {
  FormWrapper,
  Paragraph,
  StyledInput,
  SubmitBtn,
  TreasureWrapper,
  HatWrapper
} from "./Mystery.styled";
const Mystery = () => {
  return (
    <>
      <Typography variant="h2" textAlign="center">
        Mystery
      </Typography>
      {/* <img src={Hat} alt="hat" /> */}
      <Paragraph>
       Soon...
      </Paragraph>
      <FormWrapper>
        <StyledInput placeholder="Your answer" />
        <SubmitBtn>SEND</SubmitBtn>
      </FormWrapper>
      <TreasureWrapper>
        <img width="100%" height="100%" src={TreasureBox} alt="box" />
      </TreasureWrapper>
      <HatWrapper>
        <img width="100%" height="100%" src={Hat} alt="hat" />
      </HatWrapper>
    </>
  );
};

export default Mystery;
