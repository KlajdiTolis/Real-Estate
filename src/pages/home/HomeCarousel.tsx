import React from "react";
import { useMediaQuery, Theme } from "@mui/material";

import Test from "../../assets/real-estate.png";
import Carousel from "react-bootstrap/Carousel";

//import images
import Buildingsss from "../../assets/buildings.jpg";
import Loan1 from "../../assets/loan/lowInteres.jpg"
import Loan2 from "../../assets/loan/supportLoan.jpg"
import Loan3 from "../../assets/loan/longTerm.jpg"

// import Loan1 from "../../assets/loan/easyLoan.jpg"
// import Loan2 from "../../assets/loan/loan.jpg"
// import Loan3 from "../../assets/loan/lowInteress (1).jpg"


function UncontrolledExample() {
  //     const isXSmall = useMediaQuery((theme: Theme) =>
  //     theme.breakpoints.down('sm')
  // )
  return (
    <Carousel variant="dark" interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Loan1}
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
          src={Loan2}
          alt="Second slide"
          height={400}
          width={800}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Loan3}
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
