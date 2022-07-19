import React, { Fragment, useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Divider from "@mui/material/Divider";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import TwitterIcon from "../../../assets/twitter.svg";
import DiscordIcon from "../../../assets/discord.svg";
import LogoIcon from "../../../assets/logo.jpg";
import { menuOptions } from "../../../../data/";
import List from "@mui/material/List";
import {
  CollectBtn,
  LeftSide,
  Logo,
  MenuList,
  Nav,
  RightSide,
  StyledHeader,
  StyledIcons,
  StyledListItem,
} from "./Header.styled";

const IconContainer = () => {
  return (
    <StyledIcons className="icons-container">
      <a href="#">
        <img src={TwitterIcon} alt="twitter" />
      </a>
      <a href="#">
        <img src={DiscordIcon} alt="discord" />
      </a>
    </StyledIcons>
  );
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = (toggle) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(toggle);
  };

  return (
    <>
      <StyledHeader>
        <Nav>
          <LeftSide>
            <Logo src={LogoIcon} alt="logo brand" />
            <IconContainer />
            <MenuList>
              {menuOptions.map(({ id, href, content }) => (
                <a key={id} href={href}>
                  {content}
                </a>
              ))}
            </MenuList>
          </LeftSide>
          <RightSide>
            <IconContainer />
            <CollectBtn>CONNECT TO WALLET</CollectBtn>
            <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
          </RightSide>
        </Nav>
      </StyledHeader>

      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List>
          {menuOptions.map(({ id, content, href }, index, array) => (
            <Fragment key={id}>
              <StyledListItem
                component="a"
                href={href}
                onClick={() => setOpen(false)}
              >
                {content}
              </StyledListItem>
              {index < array.length - 1 && (
                <Divider
                  light
                  variant="fullWidth"
                  sx={{ background: "#545454" }}
                />
              )}
            </Fragment>
          ))}
        </List>
      </SwipeableDrawer>
    </>
  );
};

export default Header;
