import { Button, CssBaseline } from "@mui/material";
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
      <AlternateTimeline />
    </Layout>
  );
};

export default App;
