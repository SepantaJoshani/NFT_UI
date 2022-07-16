import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { timelineData } from "../../../../data";

const StyledTimeLineContent = styled(TimelineContent)`
  background-image: -webkit-linear-gradient(#262626 0%, #101010 100%);
  background-image: -moz-linear-gradient(#262626 0%, #101010 100%);
  background-image: -o-linear-gradient(#262626 0%, #101010 100%);
  background-image: linear-gradient(#262626 0%, #101010 100%);
  border-radius: 20px;
  box-shadow: 16px -19px 0px 2px #707070;

  ${(p) =>
    p.right
      ? css`
          margin-left: 20px;
        `
      : css`
          margin-right: 20px;
        `}
`;

const StyledTimeline = styled(Timeline)`
  ${(p) => p.theme.breakpoints.down("sm")} {
    .MuiTimelineItem-root::before {
      flex: 0;
    }
  }
`;

export default function AlternateTimeline() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledTimeline position={smDown ? "right" : "alternate"}>
      {timelineData.map(({ id, text }, index) => (
        <TimelineItem key={id}>
          <TimelineSeparator>
            <TimelineDot>{index + 1}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <StyledTimeLineContent right={index % 2 == 0}>
            {text}
          </StyledTimeLineContent>
        </TimelineItem>
      ))}
    </StyledTimeline>
  );
}
