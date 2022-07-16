import { Box, Button, CssBaseline, Typography } from "@mui/material";
import styled from "@emotion/styled";

import React from "react";
import AlternateTimeline from "./components/content/timeline/AlternateTimeline";
import { Layout } from "./components/layout";
import Story from "./components/content/story/Story";
import Faq from "./components/content/faq/Faq";

const App = () => {
  return (
    <Layout>
      <CssBaseline />
      <StoryWrapper>
        <Story />
      </StoryWrapper>
      <TimeLineWrapper component="section">
        <AlternateTimeline />
      </TimeLineWrapper>
      <FaqWrapper>
        <Faq />
      </FaqWrapper>
    </Layout>
  );
};

export default App;

const StoryWrapper = styled.section`
  padding: 1rem 1.5rem;
  background-color: transparent;
  border: 1px solid #fdd54b;
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin: 0 auto;
    margin-top: 2rem;
  }
  @media (min-width: 768px) {
    margin: 0 auto;
    margin-top: 2rem;
    width: 90%;
  }
`;

const TimeLineWrapper = styled(Box)`
  margin-top: 1.5rem;
  /* ${(p) => p.theme.breakpoints.up("lg")} {
    margin-top: 1.5rem;
    padding: 0 10rem;
  }
  ${(p) => p.theme.breakpoints.up("xl")} {
    padding: 0 16rem;
  } */
  @media (min-width: 1024px) {
    width: 90%;
    margin: 0 auto;
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
