import CssBaseline from "@mui/material/CssBaseline";
import { Layout } from "./components/layout";
import {
  Story,
  Faq,
  Hero,
  Mystery,
  SomeNft,
  Team,
  AlternateTimeline,
  Treasure,
} from "./components";
import {
  FaqWrapper,
  HeroWrapper,
  MysteryWrapper,
  NftWrapper,
  StoryWrapper,
  TeamWrapper,
  TimeLineWrapper,
  TreasureWrapper,
} from "./App.styled";

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
        <MysteryWrapper>
          <Mystery />
        </MysteryWrapper>
        <TeamWrapper>
          <Team />
        </TeamWrapper>
        <NftWrapper>
          <SomeNft />
        </NftWrapper>
        <FaqWrapper id="faq">
          <Faq />
        </FaqWrapper>
      </Layout>
    </>
  );
};

export default App;
