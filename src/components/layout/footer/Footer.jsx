import styled from "@emotion/styled";
import React from "react";
import Button from "@mui/material/Button";
import { maxWidth, paddingWrapper } from "../../common";
import LogoIcon from "../../../assets/logo.jpg";
import TwitterIcon from "../../../assets/twitter.svg";
import DiscordIcon from "../../../assets/discord.svg";
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const mdUp = useMediaQuery("(min-width:768px)");

  const mobileSize = (
    <>
      <Logo src={LogoIcon} alt="brand" />
      <ButtonsContainer>
        <TwitterBtn>
          <img src={TwitterIcon} alt="twitter icon" />
        </TwitterBtn>
        <DiscordBtn>
          <img src={DiscordIcon} alt="twitter icon" />
        </DiscordBtn>
      </ButtonsContainer>
    </>
  );

  const tabletAbove = (
    <>
      <Logo src={LogoIcon} alt="brand" />
      <SingleCol>
        <a href="#story">Story</a>
        <a href="#road-map">Road Map</a>
        <a href="#treasure-map">Treasure Map</a>
      </SingleCol>
      <SingleCol>
        <a href="#mystery">Myestery</a>
        <a href="#term">Term</a>
        <a href="#faq">Faq</a>
      </SingleCol>
      <BtnCol>
        <a href="#">
          <img src={TwitterIcon} alt="twitter icon" />
        </a>
        <a href="#">
          <img src={DiscordIcon} alt="twitter icon" />
        </a>
      </BtnCol>
    </>
  );

  return <StyledFooter>{mdUp ? tabletAbove : mobileSize}</StyledFooter>;
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${paddingWrapper}
  ${maxWidth}
  margin: 2.5rem auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Logo = styled.img`
  width: 5rem;
  height: 5rem;

  @media (min-width: 768px) {
    width: 7rem;
    height: 7rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  z-index: 2;
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

const SingleCol = styled.div`
  display: flex;
  flex-direction: column;
  a {
    padding: 0.5rem 0;
    font-size: .8rem;
  }

  @media (min-width: 1024px) {
    a{
      font-size: 1rem;
    }
  }
`;
const BtnCol = styled.div`
  display: flex;
  column-gap: 1rem;
`;
