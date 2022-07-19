import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import PlusIcon from "../../../assets/plus.svg";
import { timelineData } from "../../../../data/index";
const Faq = () => {
  return (
    <>
      <Typography variant="h2" fontWeight="bold" textAlign="center">
        FAQ
      </Typography>
      {timelineData.map(({ id, text }, i) => (
        <Accordion
          key={id}
          sx={{
            background: "#545454",
            "&.MuiAccordion-root": {
              ":first-of-type": {
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              },
            },
            borderRadius: "20px",
          }}
        >
          <AccordionSummary
            sx={{
              py: {
                xs: 0,
                md: 1,
                lg: 1.2,
              },
            }}
            expandIcon={<img src={PlusIcon} alt="plus" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default Faq;
