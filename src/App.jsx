import { Box, Button, CssBaseline, Typography } from "@mui/material";
import styled from "@emotion/styled";

import React from "react";
import AlternateTimeline from "./components/content/timeline/AlternateTimeline";
import { Layout } from "./components/layout";
import Story from "./components/content/story/Story";
import Faq from "./components/content/faq/Faq";
import Hero from "./components/content/hero/Hero";
import Treasure from "./components/content/treasure/Treasure";
import Team from "./components/content/team/Team";
import SomeNft from "./components/content/nft/SomeNft";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <HeroWrapper id="hero">
          <Hero />
        </HeroWrapper>
        <StoryWrapper id="story">
          <Story />
        </StoryWrapper>
        <TimeLineWrapper component="section" id="road-map">
          <AlternateTimeline />
        </TimeLineWrapper>
        <TreasureWrapper>
          <Treasure />
        </TreasureWrapper>
        <Team />
        <SomeNft />
        <FaqWrapper id="faq">
          <Faq />
        </FaqWrapper>
      </Layout>
    </>
  );
};

export default App;

const HeroWrapper = styled.section`
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

const StoryWrapper = styled.section`
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

const TimeLineWrapper = styled(Box)`
  margin-top: 1.5rem;
  @media (min-width: 1024px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 2.5rem;
  }
`;

const TreasureWrapper = styled.section`
  margin-top: 3rem;
  .swiper {
    padding-bottom: 30px;
  }
 
  .swiper-pagination-bullet-active-next {
    background: #fff;
  }
  .swiper-pagination-bullet-active-main {
    background: #fdd54b;
  }
`;

const FaqWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1rem;

  @media (min-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
`;
