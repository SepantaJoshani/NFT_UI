import styled from "@emotion/styled";
import { maxWidth, paddingWrapper } from "../../common";
import ListItem from "@mui/material/ListItem";

export const StyledHeader = styled.header`
  color: #fff;
  ${maxWidth}
  ${paddingWrapper}
`;

export const Nav = styled.nav`
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.div`
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
export const RightSide = styled.div`
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

export const CollectBtn = styled.button`
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

export const Logo = styled.img`
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

export const MenuList = styled.div`
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

export const StyledListItem = styled(ListItem)`
  cursor: pointer;
  color: #fff;
  padding: 0.8rem 1.5rem;
  width: 100%;
  border-radius: 5px;
  :hover {
    background-color: #fdd64a;
    color: #181818;
  }
  transition: all 0.2s ease-in;
`;

export const StyledIcons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.3rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 1024px) {
    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;
