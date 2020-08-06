import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import DPlayer from "dplayer";

export default function AdvisorVideoCard(props) {
  /* initiate isActive flag for dynamicly adding hover style */

  /* creat new video player objects */
  useEffect(() => {
    new DPlayer({
      container: document.getElementById("dp11"),
      video: {
        url: "//cdn.eduwork.cn/mp4/gaoluofeng.mp4",
        pic: "images/eduglf.jpg",
        mutex: true,
      },
    });
    new DPlayer({
      container: document.getElementById("dp12"),
      video: {
        url: "//cdn.eduwork.cn/mp4/zhaoshuai.mp4",
        pic: "images/eduzs.jpg",
        mutex: true,
      },
    });
    new DPlayer({
      container: document.getElementById("dp13"),
      video: {
        url: "//cdn.eduwork.cn/mp4/xuxiaoxiong.mp4",
        pic: "images/xxx.png",
        mutex: true,
      },
    });
    new DPlayer({
      container: document.getElementById("dp14"),
      video: {
        url: "//cdn.eduwork.cn/mp4/sunjiankui.mp4",
        pic: "images/sunjk.png",
        mutex: true,
      },
    });
  }, []);

  /* change currentPage value when card is hovered */
  const onMouseEnterHandler = [
    () => {
      props.changeCurrentPage(0);
    },
    () => {
      props.changeCurrentPage(1);
    },
    () => {
      props.changeCurrentPage(2);
    },
    () => {
      props.changeCurrentPage(3);
    },
  ];

  return (
    <>
      {/* creat video cards according to props */}
      {props.lecturerInfomation.names.map((name, index) => {
        return (
          <div className="col-12 col-sm-6 col-lg-3">
            <Card
              onMouseEnter={onMouseEnterHandler[index]}
              className={index === props.currentPage ? "shadow-lg" : "null"}
            >
              <div id={"dp" + (index + 11)}></div>
              <Card.Body className="text-center">
                <p>{props.lecturerInfomation.titles[index]}</p>
              </Card.Body>
              <Card.Footer className="text-center">
                <span>{name}</span>
              </Card.Footer>
            </Card>
          </div>
        );
      })}
    </>
  );
}
