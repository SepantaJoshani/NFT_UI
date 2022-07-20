import React from "react";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const StoryTxt =
  "      Many people get stuck in everyday life and find themselves stuck in another life and it is not the life they wanted. Brotherhood gave a chance to those who wanted to turn the page of life in their favor. They went to the beautiful and strange island of Brother hood were invited. They were supposed to get training there and change their lifestyle to achieve their goals. They are going to become multi-dimensional people with the help of Brotherhood and change everything. Be with them on the path of becoming multi-dimensional.";

const Story = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          marginBottom: "0.5rem",
        }}
        fontWeight="bold"
        textAlign="center"
      >
        Story
      </Typography>
      <Typography
        variant="body2"
        sx={{
          textAlign: "justify",
          pb:'0.5rem'
        }}
      >
        {StoryTxt}
      </Typography>
    </>
  );
};

export default Story;
