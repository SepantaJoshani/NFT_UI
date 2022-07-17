import styled from "@emotion/styled";
import React from "react";
import { maxWidth, paddingWrapper } from "../common";
import { Footer, Header } from "./index";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box } from "@mui/system";
import chevronUp from "../../assets/up.svg";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#hero"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const Layout = (props) => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
      <ScrollTop {...props}>
        <Fab
          size="small"
          sx={{
            
            background: "#fdd54b",
            ":hover": {
              background: "#fdd54b",
            },
          }}
          aria-label="scroll back to top"
        >
          <img src={chevronUp} alt="up" />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Layout;

const Main = styled.main`
  min-height: 100vh;
  ${maxWidth}
  ${paddingWrapper}
`;
