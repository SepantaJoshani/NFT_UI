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
import { Typography } from "@mui/material";

export default function AlternateTimeline() {
  const theme = useTheme();
  const smDown = useMediaQuery('(max-width:640px)');
  const lgDown = useMediaQuery('(max-width:1024px)');

  return (
    <StyledTimeline position={smDown ? "right" : "alternate"}>
      {timelineData.map(({ id, text }, index) => (
        <StyledTimeLineItem key={id}>
          <TimelineSeparator>
            <StyledDot>
              <Typography fontSize="1.6rem" color="white">
                {index + 1}
              </Typography>
            </StyledDot>
            <StyledTimelineConnector />
          </TimelineSeparator>
          <StyledTimeLineContent isRight={index % 2 !== 0}>
            <Typography variant="body2" textAlign="left">
              {lgDown ? text.substring(0, 200) : text.substring(0, 400)}
            </Typography>
          </StyledTimeLineContent>
        </StyledTimeLineItem>
      ))}
    </StyledTimeline>
  );
}

const StyledTimeline = styled(Timeline)`
  ${(p) => p.theme.breakpoints.down("sm")} {
    .MuiTimelineItem-root {
    }
    .MuiTimelineItem-root::before {
      flex: 0;
      padding: 0;
    }
  }
`;
const StyledTimeLineItem = styled(TimelineItem)`
  margin-top: 1.5rem;
`;

const StyledDot = styled(TimelineDot)`
  height: 34px;
  width: 33px;
  background-color: #fdd64a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  background-color: transparent;
  border-left: 4px dotted #fff;
`;

const StyledTimeLineContent = styled(TimelineContent)`
  background-image: -webkit-linear-gradient(#262626 0%, #101010 100%);
  background-image: -moz-linear-gradient(#262626 0%, #101010 100%);
  background-image: -o-linear-gradient(#262626 0%, #101010 100%);
  background-image: linear-gradient(#262626 0%, #101010 100%);
  border-radius: 20px;
  position: relative;

  ${(p) => p.theme.breakpoints.up("md")} {
    ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: gray;
      bottom: 1rem;
      left: 1rem;
      z-index: -1;
      border-radius: 20px;
    }
    ${({ isRight }) =>
      isRight
        ? css`
            right: 24px;
          `
        : css`
            left: 8px;
          `}
  }
  ${(p) => p.theme.breakpoints.down("sm")} {
    margin-left: 1rem;
  }
`;
