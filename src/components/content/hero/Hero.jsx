import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import AVATAR from "../../../assets/heading-avatar.png";

import Plus from "../../../assets/plus-icon.svg";
import Minus from "../../../assets/minus.svg";

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

const ImgWrapper = styled.div`
  flex: 0.5;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    vertical-align: bottom;
    position: relative;
    right: 15px;
  }
`;

const WelcomeTxt = styled.h1`
  font-size: 1.25rem;
  color: #ffffff;
  margin-top: 2rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
  }

  @media (min-width: 640px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
  @media (min-width: 1280px) {
    font-size: 5rem;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

const Content = styled.div`
  flex: 0.7;
  position: relative;
  right: 1.5rem;
`;
const DescriptionTxt = styled.p`
  font-size: 0.6rem;

  color: #fff;

  span {
    margin-right: 0.3rem;
    color: #fdd54b;
  }

  @media (min-width: 480px) {
    font-size: 0.8rem;
  }

  @media (min-width: 640px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
    span {
      margin-right: 0.6rem;
    }
  }
  @media (min-width: 1280px) {
    font-size: 2.2rem;
  }

  @media (max-width: 360px) {
    font-size: 0.5rem;
  }
`;

const NumberValue = styled.p`
  color: #fff;
  font-size: 0.6rem;
  font-style: italic;
  position: relative;
  left: 1.8rem;
  margin: 0.5rem 0;

  @media (min-width: 480px) {
    font-size: 0.8rem;
    margin: 0.7rem 0;
  }

  @media (min-width: 640px) {
    font-size: 1rem;
    margin: 1rem 0;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1280px) {
    font-size: 2.2rem;
  }

  @media (max-width: 360px) {
    font-size: 0.5rem;
  }
`;

const LastLine = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 0.2rem;
`;
const NumsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.3rem;

  @media (min-width: 768px) {
    column-gap: 0.6rem;
  }
`;
const NumBtn = styled.button`
  background-color: #fff;
  width: 1.75rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  border: 0;
  border-radius: 5px;

  img {
    height: 100%;
  }

  @media (min-width: 640px) {
    width: 2.5rem;
    height: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
    width: 3rem;
    height: 2.5rem;
  }

  @media (min-width: 1024px) {
    width: 3.5rem;
    height: 3rem;
  }
  @media (min-width: 1280px) {
    width: 4rem;
    height: 3.5rem;
  }

  @media (max-width: 360px) {
    width: 1.25rem;
    height: 1.3rem;
  }
`;
const NumValue = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  height: 1.625rem;
  width: 2.625rem;

  @media (min-width: 640px) {
    height: 2rem;
    width: 3rem;
  }

  @media (min-width: 768px) {
    height: 2.5rem;
    width: 3.5rem;
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    width: 4.5rem;
    height: 3rem;
  }
  @media (min-width: 1280px) {
    width: 5rem;
    height: 3.5rem;
  }

  @media (max-width: 360px) {
    width: 2.45rem;
    height: 1.3rem;
  }
`;

const MintBtn = styled.button`
  padding: 0 0.8rem;
  background-color: #fdde3d;
  border: 0;
  outline: 0;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;

  @media (min-width: 640px) {
    padding: 0 2rem;
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    padding: 0 2.5rem;
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 3rem;
    font-size: 1.8rem;
  }
  @media (min-width: 1280px) {
    padding: 0 4rem;
    font-size: 2.2rem;
  }
`;

const DiscordBtn = styled(Button)`
  background-color: #51b4ff;
  padding: 0 0.5rem;
  :hover {
    background-color: #51b4ff;
  }
`;

const TwitterBtn = styled(DiscordBtn)`
  background-color: #6376ff;
  :hover {
    background-color: #6376ff;
  }
`;
