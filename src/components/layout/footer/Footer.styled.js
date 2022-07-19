import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { maxWidth, paddingWrapper } from "../../common";

export const StyledFooter = styled.footer`
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
export const Logo = styled.img`
  width: 4.5rem;
  height: 4.5rem;

  @media (min-width: 768px) {
    width: 7rem;
    height: 7rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  z-index: 2;
`;

export const DiscordBtn = styled(Button)`
  background-color: #51b4ff;
  padding: 0 0.5rem;
  :hover {
    background-color: #51b4ff;
  }
`;

export const TwitterBtn = styled(DiscordBtn)`
  background-color: #6376ff;
  :hover {
    background-color: #6376ff;
  }
`;

export const SingleCol = styled.div`
  display: flex;
  flex-direction: column;
  a {
    padding: 0.5rem 0;
    font-size: 0.65rem;
  }

  @media (min-width: 1024px) {
    a {
      font-size: 1rem;
    }
  }
`;
export const BtnCol = styled.div`
  display: flex;
  column-gap: 1rem;
img{
  width: 1.2rem;
  height: 1.2rem;
}

`;
