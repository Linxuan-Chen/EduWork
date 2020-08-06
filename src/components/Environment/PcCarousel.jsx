import React from "react";
import { Carousel } from "react-bootstrap";


const imgs = ["images/t1.jpg", "images/t2.jpg", "images/t3.jpg", "images/t4.jpg", "images/t5.jpg", "images/t6.jpg"];

export default function PcCarousel() {
  return (
    <div>
      <Carousel>
        {imgs.map((element, index) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" key={index} src={element} alt="Third slide" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
