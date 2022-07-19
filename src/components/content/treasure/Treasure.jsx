import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { timelineData } from "../../../../data";
import SingleSlide from "./SingleSlide";
import Typography from "@mui/material/Typography";
import LeftArrow from "../../../assets/left-arrow.svg";
import RightArrow from "../../../assets/right-arrow.svg";
import Box from "@mui/system/Box";

const breakpoints = {
  0: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
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
        style={{ zIndex: 0 }}
        breakpoints={breakpoints}
        modules={[Navigation, Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: ".left",
          nextEl: ".right",
        }}
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
