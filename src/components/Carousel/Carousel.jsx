import React from "react";
import { Carousel } from "react-bootstrap";

export default function MobileCarousel(props) {
  return (
    <div>
      <Carousel>
        {props.carouselData.imgs.map((img, index) => {
          return (
            <Carousel.Item key={index}>
              <a
                href={props.carouselData.urls[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="d-block w-100"
                  src={img}
                  alt="first slide"
                  key={index}
                />

                <Carousel.Caption className="text-light">
                  <h3>{props.carouselData.titles[index]}</h3>
                  <p>{props.carouselData.paragraphs[index]}</p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
