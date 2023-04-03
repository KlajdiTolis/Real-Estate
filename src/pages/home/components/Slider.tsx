import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import images
import Test from "../../../assets/buildings.jpg"

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div style={{ backgroundColor: "grey", paddingInline: 200,borderRadius:300 }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2> Multiple items </h2>
      </div>
      <Slider {...settings}>
        <div>
          <img src={Test} alt="hello" width={400} height={300}  />
        </div>
        <div>
        <img src={Test} alt="hello" width={400} height={300}  />
        </div>
        <div>
        <img src={Test} alt="hello" width={400} height={300}  />
        </div>
        <div>
        <img src={Test} alt="hello" width={400} height={300}  />
        </div>
        <div>
        <img src={Test} alt="hello" width={400} height={300}  />
        </div>
        <div>
        <img src={Test} alt="hello" width={400} height={300}  />
        </div>
        <div>
        <img src={Test} alt="hello" width={400} height={300}  />
        </div>
      </Slider>
    </div>
  );
}
export default MySlider;
