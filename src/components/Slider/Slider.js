import React from "react";
import { Carousel } from "react-bootstrap";
import slider from "../../images/slider-1.png";
import slider2 from "../../images/slider-2.png";
import slider3 from "../../images/slider-3.png";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slider} alt="First slide" />
          <Carousel.Caption>
            <h3>The best education for bright future</h3>
            <p>
              Education is the key to a brighter future. It is a tool that makes
              us understand the world around us. It is vital and a basic human
              right that everyone should have.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />

          {/* <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />

          <Carousel.Caption>
            <p>
              It's not always a good idea to try DIY couples counseling. In some
              cases, it can be destructive—even dangerous. ... Getting both
              individual and couples counseling at the same time is sometimes
              the best approach, but couples counseling rarely works as the only
              treatment for individual issues.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
