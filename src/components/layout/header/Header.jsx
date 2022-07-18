import styled from "@emotion/styled";
import { Twirl as Hamburger } from "hamburger-react";
import { Divider, Hidden, SwipeableDrawer } from "@mui/material";
import React, { Fragment, useState } from "react";
import { maxWidth, paddingWrapper } from "../../common";
import TwitterIcon from "../../../assets/twitter.svg";
import DiscordIcon from "../../../assets/discord.svg";
import LogoIcon from "../../../assets/logo.jpg";
import { uuid } from "../../../../data/uuid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const menuOptions = [
  { id: uuid(), content: "Story", href: "#story" },
  { id: uuid(), content: "Road Map", href: "#road-map" },
  { id: uuid(), content: "Treasure Map", href: "#treasure-map" },
  { id: uuid(), content: "Mystery", href: "#mystery" },
  { id: uuid(), content: "Term", href: "#term" },
  { id: uuid(), content: "Faq", href: "#faq" },
];

const IconContainer = () => {
  return (
    <StyledIcons className="icons-container">
      <span>
        <img src={TwitterIcon} alt="twitter" />
      </span>
      <span>
        <img src={DiscordIcon} alt="discord" />
      </span>
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

const StyledHeader = styled.header`
  color: #fff;
  ${maxWidth}
  ${paddingWrapper}
`;

const Nav = styled.nav`
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  @media (max-width: 320px) {
    column-gap: 0.2rem;
  }

  @media (min-width: 1024px) {
    .icons-container {
      display: none;
    }
  }
`;
const RightSide = styled.div`
  display: flex;
  align-items: center;

  .icons-container {
    margin-right: 1rem;
    span {
      img {
        height: 30px;
        width: 30px;
      }
    }
  }

  @media (min-width: 1024px) {
    .hamburger-react {
      display: none;
    }
  }

  @media (max-width: 1023px) {
    .icons-container {
      display: none;
    }
  }
`;

const CollectBtn = styled.button`
  border: 1px solid #fff;
  background: transparent;
  padding: 0.5rem;
  font-size: 0.5rem;
  color: #ffffff;
  border-radius: 20px;

  @media (min-width: 1024px) {
    padding: 0.8rem 0.8rem;
    font-size: 1rem;
    color: #ffffff;
  }
  @media (min-width: 1280px) {
    padding: 0.8rem 1rem;
  }
`;

const StyledIcons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.3rem;
`;

const Logo = styled.img`
  width: 3rem;
  height: 3rem;

  @media (min-width: 1024px) {
    width: 5rem;
    height: 5rem;
  }
  @media (min-width: 1280px) {
    width: 6rem;
    height: 6rem;
  }
`;

const MenuList = styled.div`
  @media (max-width: 1023px) {
    display: none;
  }
  display: flex;
  column-gap: 1rem;
  a {
    text-decoration: none;
    font-size: 1rem;
    color: #ffffff;

    @media (min-width: 1280px) {
      font-size: 1.3rem;
    }
  }
`;

const StyledListItem = styled(ListItem)`
  cursor: pointer;
  color: #fff;
  padding: 0.8rem 1.5rem;
  width: 100%;
  border-radius: 5px;
  :hover {
    background-color: #fdd64a;
    color: #181818;
  }
  transition: all .2s ease-in;
`;
