import React from "react";
import { useMediaQuery, Theme } from "@mui/material";

import Test from "../../assets/real-estate.png";
import Carousel from "react-bootstrap/Carousel";

//import images
import Buildingsss from "../../assets/buildings.jpg";

function UncontrolledExample() {
  //     const isXSmall = useMediaQuery((theme: Theme) =>
  //     theme.breakpoints.down('sm')
  // )
  return (
    <Carousel variant="dark" interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Buildingsss}
          alt="First slide"
          height={400}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Buildingsss}
          alt="Second slide"
          height={400}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Buildingsss}
          alt="Third slide"
          height={400}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
