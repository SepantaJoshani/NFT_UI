import React, { useState } from "react";
import AVATAR from "../../../assets/heading-avatar.png";
import Plus from "../../../assets/plus-icon.svg";
import Minus from "../../../assets/minus.svg";
import {
  Content,
  DescriptionTxt,
  ImgWrapper,
  LastLine,
  MintBtn,
  NumBtn,
  NumValue,
  NumberValue,
  NumsContainer,
  WelcomeTxt,
} from "./Hero.styled";

const Hero = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <ImgWrapper>
        <img src={AVATAR} alt="" />
      </ImgWrapper>
      <Content>
        <div>
          <WelcomeTxt>WELCOME</WelcomeTxt>
        </div>
        <DescriptionTxt>
          <span>7654</span>
          characters on brotherhood island
        </DescriptionTxt>
        <NumberValue>{number}/7654</NumberValue>
        <LastLine>
          <NumsContainer>
            <NumBtn onClick={() => setNumber((prev) => prev + 1)}>
              <img src={Plus} alt="plus" />
            </NumBtn>
            <NumValue>{number}</NumValue>
            <NumBtn onClick={() => setNumber((prev) => prev - 1)}>
              <img src={Minus} alt="minus" />
            </NumBtn>
          </NumsContainer>
          <MintBtn>MINT</MintBtn>
        </LastLine>
      </Content>
    </>
  );
};

export default Hero;
