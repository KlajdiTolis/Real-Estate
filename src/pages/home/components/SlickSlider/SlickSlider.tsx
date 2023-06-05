import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Button, Grid } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";

//import images
import Test from "../../../../assets/buildings.jpg";
import Sell from "../../../../assets/sell-house.webp";
import Buy from "../../../../assets/buy-house.jpg";
import Rent from "../../../../assets/rent-house.jpg";

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const bigScreen = useMediaQuery({
    query: "(min-width: 1600px)",
  });

  return (
    <Grid container>
      <Grid item md={12}>
        <Box sx={{ paddingInline: 6, paddingBlock: 3 }}>
          {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
            <h2> Multiple items </h2>
          </Box> */}
          <Slider {...settings}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={Test}
                alt="hello"
                width={bigScreen ? 500 : 200}
                height={bigScreen ? 400 : 250}
                style={{ borderRadius: 10, position: "relative", zIndex: 1 }}
              />
            </Box>
            <Box>
              <img
                src={Sell}
                alt="hello"
                width={bigScreen ? 500 : 200}
                height={bigScreen ? 400 : 250}
                style={{ borderRadius: 10 }}
              />
            </Box>
            <Box>
              <img
                src={Buy}
                alt="hello"
                width={bigScreen ? 500 : 200}
                height={bigScreen ? 400 : 250}
                style={{ borderRadius: 10 }}
              />
            </Box>
            <Box>
              <img
                src={Rent}
                alt="hello"
                width={bigScreen ? 500 : 200}
                height={bigScreen ? 400 : 250}
                style={{ borderRadius: 10 }}
              />
            </Box>
          </Slider>
        </Box>
      </Grid>
      {/* <Grid item md={4}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          Find your favorite home here
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              fontSize: 16,
              paddingBlock: 1,
              borderRadius: 3,
              mt: 2,
              boxShadow: 5,
              bgcolor: "#5a6360",
              textShadow: "#000000",
            }}
          >
            See All
          </Button>
        </Box>
      </Grid> */}
    </Grid>
  );
};
export default MySlider;
