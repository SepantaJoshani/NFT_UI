import React from "react";
import LogoIcon from "../../../assets/logo.jpg";
import TwitterIcon from "../../../assets/twitter.svg";
import DiscordIcon from "../../../assets/discord.svg";
import { useMediaQuery } from "@mui/material";
import {
  BtnCol,
  ButtonsContainer,
  DiscordBtn,
  Logo,
  SingleCol,
  StyledFooter,
  TwitterBtn,
} from "./Footer.styled";

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

  const tabletSizeAbove = (
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

  return <StyledFooter>{mdUp ? tabletSizeAbove : mobileSize}</StyledFooter>;
};

export default Footer;
