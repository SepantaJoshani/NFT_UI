import styled from "@emotion/styled";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export const StyledTimeline = styled(Timeline)`
  ${(p) => p.theme.breakpoints.down("sm")} {
    &.MuiTimeline-root {
      padding: 6px 0;
    }
    .MuiTimelineItem-root::before {
      flex: 0;
      padding: 0;
    }
  }
`;
export const StyledTimeLineItem = styled(TimelineItem)`
  margin-top: 1.5rem;
  min-height: 6.7rem;
`;

export const StyledDot = styled(TimelineDot)`
  height: 34px;
  width: 33px;
  background-color: #fdd64a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTimelineConnector = styled(TimelineConnector)`
  background-color: #fff;
`;

export const StyledTimeLineContent = styled(TimelineContent)`
  background-image: -webkit-linear-gradient(#262626 0%, #101010 100%);
  background-image: -moz-linear-gradient(#262626 0%, #101010 100%);
  background-image: -o-linear-gradient(#262626 0%, #101010 100%);
  background-image: linear-gradient(#262626 0%, #101010 100%);
  border-radius: 20px;
  position: relative;

  ${(p) => p.theme.breakpoints.up("md")} {
    border: 1px solid #fff;
    ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #2c2c2c;
      bottom: 1rem;
      left: 1rem;
      z-index: -1;
      border-radius: 20px;
    }
    &.is-right {
      right: 24px;
    }
    &.is-left {
      left: 8px;
    }
  }
  ${(p) => p.theme.breakpoints.down("sm")} {
    margin-left: 1rem;
  }
`;
