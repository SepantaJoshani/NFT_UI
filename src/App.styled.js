import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Box from "@mui/system/Box";

const MarginTop = css`
  margin-top: 3.5rem;
  @media (min-width: 768px) {
    margin-top: 6rem;
  }
  @media (min-width: 1280px) {
    margin-top: 8rem;
  }
`;

export const HeroWrapper = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  padding-right: 1rem;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 80%;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: #2c2c2c;
  }
`;

export const StoryWrapper = styled.section`
  padding: 1rem 1.5rem;
  background-color: transparent;
  border: 1px solid #fdd54b;
  margin-top: 1rem;
  border-radius: 15px;

  @media (min-width: 768px) {
    margin: 0 auto;
    margin-top: 2rem;
    width: 90%;
  }

`;

export const TimeLineWrapper = styled(Box)`
  margin-top: 3.5rem;
  @media (min-width: 1024px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 2.5rem;
  }
`;

export const TreasureWrapper = styled.section`
  .swiper {
    padding-bottom: 30px;
  }

  .swiper-pagination-bullet-active-next {
    background: #fff;
  }
  .swiper-pagination-bullet-active-main {
    background: #fdd54b;
  }

  ${MarginTop}
`;

export const MysteryWrapper = styled.section`
  background-color: #555555;
  padding: 0rem 2.5rem;
  padding-bottom: 1rem;
  position: relative;
  @media (min-width: 1024px) {
    padding-bottom: 2.5rem;
    
  }

  ${MarginTop}
  
`;

export const TeamWrapper = styled.section`
  ${MarginTop}
`;

export const NftWrapper = styled.section`
  ${MarginTop}
`;

export const FaqWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1rem;

  @media (min-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
  ${MarginTop}
`;
