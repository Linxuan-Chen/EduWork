import React from "react";
import { Card } from "react-bootstrap";
import style from "./AdvisorCard.module.scss";

export default function AdvisorCard(props) {
  return (
    <div className="card shadow-lg">
      <Card>
        <Card.Img src="images/cwbg.png" id={style.advisor_card} />
        <Card.ImgOverlay className="d-flex d-row">
          <section className="w-25">
            <img
              src={props.lecturerInfomation.imgs[props.currentPage]}
              className="img-fluid"
              alt="img"
            />
          </section>
          <section className="w-75 text-white pl-2" id={style.advisor_text}>
            <h4>{props.lecturerInfomation.names[props.currentPage]}</h4>
            <h6>{props.lecturerInfomation.titles[props.currentPage]}</h6>
            <p>{props.lecturerInfomation.contents[props.currentPage]}</p>
          </section>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
