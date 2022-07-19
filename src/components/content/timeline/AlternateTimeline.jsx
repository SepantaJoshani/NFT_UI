import TimelineSeparator from "@mui/lab/TimelineSeparator";
import useMediaQuery from "@mui/material/useMediaQuery";
import { timelineData } from "../../../../data";
import Typography from "@mui/material/Typography";
import {
  StyledDot,
  StyledTimeLineContent,
  StyledTimeLineItem,
  StyledTimeline,
  StyledTimelineConnector,
} from "./Timeline.styled";

export default function AlternateTimeline() {
  const smDown = useMediaQuery("(max-width:640px)");
  const lgDown = useMediaQuery("(max-width:1024px)");

  return (
    <>
      <Typography variant="h2" fontWeight="bold" textAlign="center">
        ROAD MAP
      </Typography>

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
            <StyledTimeLineContent
              className={index % 2 !== 0 ? "is-right" : "is-left"}
            >
              <Typography variant="body2" textAlign="left">
                {lgDown ? text.substring(0, 200) : text.substring(0, 500)}
              </Typography>
            </StyledTimeLineContent>
          </StyledTimeLineItem>
        ))}
      </StyledTimeline>
    </>
  );
}
