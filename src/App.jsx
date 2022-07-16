import { Box, Button, CssBaseline } from "@mui/material";
import styled from "@emotion/styled";

import React from "react";
import AlternateTimeline from "./components/content/timeline/AlternateTimeline";
import { Layout } from "./components/layout";

const App = () => {
  return (
    <Layout>
      <CssBaseline />
      <div>App</div>
      <Button variant="contained">HI</Button>
      <TimeLineWrapper>
        <AlternateTimeline />
      </TimeLineWrapper>
    </Layout>
  );
};

export default App;

const TimeLineWrapper = styled(Box)`
  ${(p) => p.theme.breakpoints.up("lg")} {
    padding: 0 10rem;
  }
`;
