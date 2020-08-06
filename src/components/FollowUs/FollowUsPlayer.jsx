import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import DPlayer from "dplayer";

const msgs = ["10 Core Advantages", "On-Duty Traning Mode", "Teaching Quality Is Guarenteed", "Immersive Internship Projects"];
export default function FollowUsPlayer() {
  useEffect(() => {
     new DPlayer({
        container: document.getElementById('dp0'),
        screenshot: true,
        video: {
            url: '//cdn.eduwork.cn/mp4/youshi.mp4',
            pic: "images/player/p1.png",
            mutex: true,
        },
    });
     new DPlayer({
        container: document.getElementById('dp1'),
        screenshot: true,
        video: {
            url: '//cdn.eduwork.cn/mp4/three.mp4',
            pic: "images/player/p2.png",
            mutex: true,
        },
    });
     new DPlayer({
        container: document.getElementById('dp2'),
        screenshot: true,
        video: {
            url: '//cdn.eduwork.cn/mp4/four.mp4',
            pic: "images/player/p3.png",
            mutex: true,
        },
    });
     new DPlayer({
        container: document.getElementById('dp3'),
        screenshot: true,
        video: {
            url: '//cdn.eduwork.cn/mp4/two.mp4',
            pic: "images/player/p4.png",
            mutex: true,
        },
    });

  });

  return (
    <Carousel className="pb-5 bg bg-dark px-5">
      {msgs.map((msg, index) => {
        return (
          <Carousel.Item key={index}>
            <div id={"dp"+index} key={index}></div>
            <Carousel.Caption>
                {msg}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
