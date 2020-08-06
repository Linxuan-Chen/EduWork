import React from "react";
import style from "./GainsContent.module.scss";

export default function GainsContent() {
  return (
    <div className={style.row_container + " row"}>
      <div className="col-4 col-lg-2 pr-1 pt-1">
        <i className="button-container">
          <a href="https://www.eduwork.cn/myget.html#one" target="_blank" rel="noopener noreferrer" className="rounded-lg text-center text-decoration-none">
            <h4>Oppotunities of internship</h4>
            <span className={style.span_container}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
        </i>
      </div>
      <div className="col-4 col-lg-2 p-1">
        <i className="button-container">
          <a href="https://www.eduwork.cn/myget.html#two" target="_blank" rel="noopener noreferrer" className="rounded-lg text-center text-decoration-none">
            <h4 className="my-atu"> Work Experience</h4>
            <span className={style.span_container}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
        </i>
      </div>
      <div className="col-4 col-lg-2 p-1">
        <i className="button-container">
          <a href="https://www.eduwork.cn/myget.html#three" target="_blank" rel="noopener noreferrer" className="rounded-lg text-center text-decoration-none">
            <h4 className="my-atu">Full Stack Skills</h4>
            <span className={style.span_container}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
        </i>
      </div>
      <div className="col-4 col-lg-2 p-1">
        <i className="button-container">
          <a href="https://www.eduwork.cn/myget.html#four" target="_blank" rel="noopener noreferrer" className="rounded-lg text-center text-decoration-none">
            <h4 className="my-atu">Commercial Projects</h4>
            <span className={style.span_container}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
        </i>
      </div>
      <div className="col-4 col-lg-2 p-1">
        <i className="button-container">
          <a href="https://www.eduwork.cn/myget.html#five" target="_blank" rel="noopener noreferrer" className="rounded-lg text-center text-decoration-none">
            <h4 className="my-atu">Accumulating Your Own Connections</h4>
            <span className={style.span_container}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
        </i>
      </div>
      <div className="col-4 col-lg-2 pl-1 pt-1">
        <i className="button-container">
          <a href="https://www.eduwork.cn/myget.html#six" target="_blank" rel="noopener noreferrer" className="rounded-lg text-center text-decoration-none">
            <h4 className="my-atu">Desired Jobs</h4>
            <span className={style.span_container}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
        </i>
      </div>
    </div>
  );
}
