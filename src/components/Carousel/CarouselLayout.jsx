import React from "react";

import Carousel from "./Carousel";

/* carousel data */
const carouselData = {
  urls: [
    "https://www.eduwork.cn/weball/index.html",
    "https://www.eduwork.cn/article_0518.html",
    "https://www.eduwork.cn/webtx.html",
    "https://www.eduwork.cn/article_0530.html",
    "https://www.eduwork.cn/article_0110.html",
    "https://www.eduwork.cn/article_1011.html",
  ],
  imgs: [
    "images/player/1.jpg",
    "images/player/2.jpg",
    "images/player/3.jpg",
    "images/player/4.jpg",
    "images/player/5.jpg",
    "images/player/6.jpg",

  ],
  titles: [
    "Web Full-Stack Course",
    "Ten Core Advantages",
    "Course Outline",
    "Initaite 'On-Duty' Training Mode",
    "Training Quality",
    "Immersive Internship Projects"

  ],
  paragraphs: [
    "The best web full-stack course，tuition for the first 100 students is only 9800￥!",
    "There's no reason for not choosing us!",
    "The course is no doubt the most professional one!",
    "An advanced training mode chosen by over thousands of students",
    "Training quality is reliable",
    "CTO leads you to build real commercial projects"

  ]
};

export default function CarouselLayout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Carousel carouselData={carouselData} />
        </div>
      </div>
    </div>
  );
}
