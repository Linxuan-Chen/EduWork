import React from "react";
import style from "./FaceToFace.module.scss";

export default function FactToFace(props) {
  return (
    <div>
      {/* <section className="row text-center">
        <div className="col-2">Courses</div>
        <div className="col-2">Outline</div>
        <div className="col-1">Learning Cycle</div>
        <div className="col-3">Free Trail</div>
        <div className="col-4">Schedule</div>
      </section> */}
      {props.data.courses.imgs.map((img, index) => {
        return (
          <section className="row">
            {/* course column starts */}
            <div className="col-2 px-1 text-center">
              <a
                href={props.data.courses.urls[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure
                  className="figure text-center bg-light px-1"
                  id={style.figure}
                >
                  <img
                    src={img}
                    alt="img"
                    className="figure-img img-fluid"
                    key={index}
                  />
                  <figcaption
                    className="figure-caption"
                    style={{
                      color: props.data.courses.color[index],
                    }}
                  >
                    {props.data.courses.captions[index]}
                  </figcaption>
                </figure>
              </a>
            </div>
            {/* course column ends */}

            {/* outline column starts */}
            <div className="col-2 px-1">
              <div className="media text-justify py-1 bg-light">
                <img
                  src={props.data.outlines.imgs[0][index]}
                  alt=""
                  className="img-fluid"
                  key={index}
                />
                <div className="media-body text-center bg-light">
                  {props.data.outlines.texts[0][index]}
                </div>
              </div>
              <div className="media text-center bg-light">
                <img
                  src={props.data.outlines.imgs[1][index]}
                  alt=""
                  className="img-fluid"
                  key={index}
                />
                <div className="media-body text-center bg-light">
                  {props.data.outlines.texts[1][index]}
                </div>
              </div>
            </div>
            {/* outline column ends */}

            {/* cycle column starts */}
            <div className="col-1 px-1">
              <p className="text-center py-4 bg-light">
                120days
              </p>
            </div>
            {/* cycle column ends */}

            {/* trail column starts */}
            <div
              className="col-3 overflow-auto px-1 mb-2"
              style={{
                height: "150px",
              }}
            >
              {/* 1st element */}
              <div
                className="media border border-light bg-light"
                id={style.trail_media}
              >
                <div className="media-body text-left">
                  <header
                    className="text-white px-1"
                    style={{
                      backgroundColor: props.data.courses.color[index],
                    }}
                  >
                    {props.data.trail.titles[index][0]}
                  </header>
                  <footer className="d-flex justify-content-between py-3">
                    <small>
                      ▶ {props.data.trail.footerLeftTexts[index][0]}
                    </small>
                    <small>★★★★★</small>
                  </footer>
                </div>
                <img
                  src={props.data.trail.imgs[index][0]}
                  alt="img"
                  className="img-fluid px-1"
                  key={index}
                />
              </div>
              {/* 2ed element */}
              <div
                className="media border border-light bg-light"
                id={style.trail_media}
              >
                <div className="media-body text-left">
                  <header
                    className="text-white px-1"
                    style={{
                      backgroundColor: props.data.courses.color[index],
                    }}
                  >
                    {props.data.trail.titles[index][1]}
                  </header>
                  <footer className="d-flex justify-content-between py-3">
                    <small>
                      ▶ {props.data.trail.footerLeftTexts[index][1]}
                    </small>
                    <small>★★★★★</small>
                  </footer>
                </div>
                <img
                  src={props.data.trail.imgs[index][1]}
                  alt="img"
                  className="img-fluid px-1"
                  key={index}
                />
              </div>
              {/* 3rd element */}
              <div
                className="media border border-light bg-light"
                id={style.trail_media}
              >
                <div className="media-body text-left">
                  <header
                    className="text-white px-1"
                    style={{
                      backgroundColor: props.data.courses.color[index],
                    }}
                  >
                    {props.data.trail.titles[index][2]}
                  </header>
                  <footer className="d-flex justify-content-between py-3">
                    <small>
                      ▶ {props.data.trail.footerLeftTexts[index][2]}
                    </small>
                    <small>★★★★★</small>
                  </footer>
                </div>
                <img
                  src={props.data.trail.imgs[index][2]}
                  alt="img"
                  className="img-fluid px-1"
                  key={index}
                />
              </div>
              {/* 4th element */}
              <div
                className="media border border-light bg-light"
                id={style.trail_media}
              >
                <div className="media-body text-left">
                  <header
                    className="text-white px-1"
                    style={{
                      backgroundColor: props.data.courses.color[index],
                    }}
                  >
                    {props.data.trail.titles[index][3]}
                  </header>
                  <footer className="d-flex justify-content-between py-3">
                    <small>
                      ▶ {props.data.trail.footerLeftTexts[index][3]}
                    </small>
                    <small>★★★★★</small>
                  </footer>
                </div>
                <img
                  src={props.data.trail.imgs[index][3]}
                  alt="img"
                  className="img-fluid px-1"
                  key={index}
                />
              </div>
              {/* 5th element */}
              <div
                className="media border border-light bg-light"
                id={style.trail_media}
              >
                <div className="media-body text-left">
                  <header
                    className="text-white px-1"
                    style={{
                      backgroundColor: props.data.courses.color[index],
                    }}
                  >
                    {props.data.trail.titles[index][4]}
                  </header>
                  <footer className="d-flex justify-content-between py-3">
                    <small>
                      ▶ {props.data.trail.footerLeftTexts[index][4]}
                    </small>
                    <small>★★★★★</small>
                  </footer>
                </div>
                <img
                  src={props.data.trail.imgs[index][4]}
                  alt="img"
                  className="img-fluid px-1"
                  key={index}
                />
              </div>
              {/* 6th element */}
              <div
                className="media border border-light bg-light"
                id={style.trail_media}
              >
                <div className="media-body text-left">
                  <header
                    className="text-white px-1"
                    style={{
                      backgroundColor: props.data.courses.color[index],
                    }}
                  >
                    {props.data.trail.titles[index][5]}
                  </header>
                  <footer className="d-flex justify-content-between py-3">
                    <small>
                      ▶ {props.data.trail.footerLeftTexts[index][5]}
                    </small>
                    <small>★★★★★</small>
                  </footer>
                </div>
                <img
                  src={props.data.trail.imgs[index][5]}
                  alt="img"
                  className="img-fluid px-1"
                  key={index}
                />
              </div>
            </div>

            {/* trail column ends */}

            {/* schedule column starts */}
            <div className="col-4 d-flex flex-column">
              <div
                className="row list-group-item-success"
                style={{
                  height: "50px",
                }}
              >
                <div className="col-4 pt-2 small text-center">
                  {props.data.schedule.name[index][0]}
                </div>
                <div className="col-2 pt-2 small text-center">
                    {props.data.schedule.date[index][0]}
                </div>
                <div className="col-2 pt-2 small text-center">
                  {props.data.schedule.status[index][0]}
                </div>
                <div className="col-4 pt-2 small text-center">
                    <a href="/" className="text-decoration-none">Register</a>
                </div>
              </div>
              <div
                className="row list-group-item-warning"
                style={{
                  height: "50px",
                }}
              >
                <div className="col-4 pt-2 small text-center">
                  {props.data.schedule.name[index][1]}
                </div>
                <div className="col-2 pt-2 small text-center">
                    {props.data.schedule.date[index][1]}
                </div>
                <div className="col-2 pt-2 small text-center">
                  {props.data.schedule.status[index][1]}
                </div>
                <div className="col-4 pt-2 small text-center">
                    <a href="/" className="text-decoration-none">Register</a>
                </div>
              </div>
              <div
                className="row list-group-item-info"
                style={{
                  height: "50px",
                }}
              >
                <div className="col-4 pt-2 small text-center">
                  {props.data.schedule.name[index][2]}
                </div>
                <div className="col-2 pt-2 small text-center">
                    {props.data.schedule.date[index][2]}
                </div>
                <div className="col-2 pt-2 small text-center">
                  {props.data.schedule.status[index][2]}
                </div>
                <div className="col-4 pt-2 small text-center">
                    <a href="/" className="text-decoration-none">Register</a>
                </div>
              </div>
            </div>
            {/* schedule column ends */}
          </section>
        );
      })}
    </div>
  );
}
