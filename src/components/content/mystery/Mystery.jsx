import React from "react";
import Typography from "@mui/material/Typography";
import { Hat, TreasureBox } from "../../../assets";
import {
  FormWrapper,
  Paragraph,
  StyledInput,
  SubmitBtn,
  TreasureWrapper,
} from "./Mystery.styled";
const Mystery = () => {
  return (
    <>
      <Typography variant="h2" textAlign="center">
        Mystery
      </Typography>
      {/* <img src={Hat} alt="hat" /> */}
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas purus
        viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus
      </Paragraph>
      <FormWrapper>
        <StyledInput placeholder="send" />
        <SubmitBtn>SEND</SubmitBtn>
      </FormWrapper>
      <TreasureWrapper>
        <img width="100%" height="100%" src={TreasureBox} alt="" />
      </TreasureWrapper>
    </>
  );
};

export default Mystery;
