import React from "react";
import LogoIcon from "../../../assets/logo.jpg";
import TwitterIcon from "../../../assets/twitter.svg";
import DiscordIcon from "../../../assets/discord.svg";
import { BtnCol, Logo, SingleCol, StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
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
    </StyledFooter>
  );
};

export default Footer;
