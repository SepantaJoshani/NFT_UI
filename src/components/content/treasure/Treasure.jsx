import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import styled from "@emotion/styled";
import { timelineData } from "../../../../data";
import SingleSlide from "./SingleSlide";
import { Divider, Typography } from "@mui/material";
import LeftArrow from "../../../assets/left-arrow.svg";
import RightArrow from "../../../assets/right-arrow.svg";
import { Box } from "@mui/system";

const breakpoints = {

  0: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  // when window width is >= 640px

};
function Treasure() {
  return (
    <>
      <Typography textAlign="center" variant="h2" sx={{ mb: 3 }}>
        TREASURE MAP
      </Typography>
      <LineContainer>
        <img className="left" src={LeftArrow} alt="left arrow" />
        <Box sx={{ width: "100%", height: "4px", background: "#fdd54b" }} />
        <img className="right" src={RightArrow} alt="right arrow" />
      </LineContainer>
      <Swiper
        breakpoints={breakpoints}
        navigation={{
          prevEl: ".left",
          nextEl: ".right",
        }}
        modules={[Navigation]}
      >
        {timelineData.map(({ text, id }) => (
          <SwiperSlide key={id}>
            <SingleSlide content={text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Treasure;

const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  img {
    cursor: pointer;
  }
`;
