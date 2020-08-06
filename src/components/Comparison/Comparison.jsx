import React, { useState } from "react";
import "./Comparison.scss";

export default function Comparison(props) {
  const [currentLine, setCurrentLine] = useState(-1);

  const onMouseEnterHandler = [];
  for (let index = 0; index < props.modes.traditional.text.length; index++) {
    onMouseEnterHandler[index] = () => {
      setCurrentLine(index);
    };
  }

  const onMouseLeaveHandler = [];
  for (let index = 0; index < props.modes.traditional.text.length; index++) {
    onMouseLeaveHandler[index] = () => {
      setCurrentLine(-1);
    };
  }

  return (
    <>
      {/* title */}
      <div className="row">
        <div className="col text-right rounded bg-white pt-2">
          <h1 className="bg-light">{props.modes.new.title}</h1>
        </div>
        <div className="col-2 text-center rounded shadow-lg mx-4">
          <b className="h1 text-danger pr-2">V</b>
          <b className="h1 text-dark">S</b>
        </div>
        <div className="col text-left rounded bg-white pt-2">
          <h1 className="bg-light">{props.modes.traditional.title}</h1>
        </div>
      </div>

      {/* Content */}
      {props.modes.new.text.map((text, index) => {
        return (
          <div
            className={`row py-2 ${index === currentLine ? "active" : ""}`}
            onMouseEnter={onMouseEnterHandler[index]}
            onMouseLeave={onMouseLeaveHandler[index]}
          >
            <div className="col pt-1">
              <div
                className="progress text-right bg-white"
                style={{
                  height: "40px",
                }}
              >
                <div
                  className="progress-bar bg-light text-danger text-right pr-3"
                  style={{
                    width: `${100 - props.modes.new.percentage[index]}%`,
                  }}
                >
                  {props.modes.new.percentage[index]}
                </div>
                <div
                  className="progress-bar bg-danger progress-bar-striped progress-bar-animated text-right pr-3"
                  style={{
                    width: `${props.modes.new.percentage[index]}%`,
                  }}
                >
                  {text}
                </div>
              </div>
            </div>
            <div className="col-2 text-center rounded bg-light pt-3">
              <h6>{props.modes.aspects[index]}</h6>
            </div>
            <div className="col text-left rounded pt-1">
              <div
                className="progress text-left "
                style={{
                  height: "40px",
                }}
              >
                <div
                  className="progress-bar bg-dark progress-bar-striped text-left pl-3"
                  style={{
                    width: `${props.modes.traditional.percentage[index]}%`,
                  }}
                >
                  {props.modes.traditional.text[index]}
                </div>
                <div
                  className="progress-bar bg-light text-left text-danger pl-3"
                  style={{
                    width: `${
                      100 - props.modes.traditional.percentage[index]
                    }%`,
                  }}
                >
                  {props.modes.traditional.percentage[index]}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
