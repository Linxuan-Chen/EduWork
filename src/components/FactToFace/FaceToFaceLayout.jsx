import React from "react";
import FaceToFace from "./FactToFace";

const data = {
  courses: {
    imgs: ["images/webqz.png", "images/java_icon.png", "images/php_ic.png"],
    captions: [
      "Web Full Stack Developer",
      "Java Full Stack Developer",
      "PHP Full Stack Developer",
    ],
    urls: [
      "https://www.eduwork.cn/weball/index.html",
      "https://www.eduwork.cn/javaedu.html",
      "https://www.eduwork.cn/phpedu.html",
    ],
    color: ["#B35058", "#3A7BC5", "#6D87D0"],
  },
  outlines: {
    imgs: [
      ["images/wline.png", "images/jline.png", "images/pline.png"],
      ["images/wgang.png", "images/jgang.png", "images/pgang.png"],
    ],
    texts: [
      [`Web Study Road Map`, `Java Study Road Map`, `PHP Study Road Map`],
      [`New Couse Outline`, `New Couse Outline`, `New Couse Outline`],
    ],
  },
  battery: {},
  trail: {
    titles: [
      [
        "JQuery and Its Applications",
        "Web Layout Tutorial",
        "DOM Operations and Its Applications",
        "ES6 New Features",
        "Ajax asynchronous requests",
        "JavaScript Basics",
      ],
      [
        "Java Web Projects",
        "Think in OOP",
        "JavaSE core libraries",
        "Web Layout Tutorial",
        "MySQL 8 Tutorial",
        "JavaScript Basics",
      ],
      [
        "Compose Package Manager",
        "How To Set Up LAMP Environment",
        "Laravel Tutorial",
        "Web Layout Tutorial",
        "MySQL 8 Tutorial",
        "JavaScript Basics",
      ],
    ],
    imgs: [
      [
        "images/gao.png",
        "images/mqwl.png",
        "images/gao.png",
        "images/gaol.png",
        "images/gao.png",
        "images/gaol.png",
      ],
      [
        "images/zhaor.png",
        "images/oop.png",
        "images/zhaor.png",
        "images/mqwl.png",
        "images/mqwr.png",
        "images/gaol.png",
      ],
      [
        "images/gao.png",
        "images/lamp.png",
        "images/mqwr.png",
        "images/mqwl.png",
        "images/mqwr.png",
        "images/gaol.png",
      ],
    ],
    footerLeftTexts: [
      ["147k", "661k", "192k", "241k", "158k", "1095k"],
      ["328k", "153k", "97k", "661k", "279k", "1095k"],
      ["118k", "169k", "273k", "661k", "279k", "1095k"],
    ],
  },
  schedule: {
    name: [
      ["Web class 01", "Java class 01", "PHP class 01"],
      ["Web class 02", "Java class 02", "PHP class 02"],
      ["Web class 03", "Java class 03", "PHP class 03"],
    ],
    date: [
      ["07/15", "09/09", "10/22"],
      ["TBD", "TBD", "TBD"],
      ["TBD", "TBD", "TBD"],
    ],
    status: [
      ["Full", "Available", "Available"],
      ["Available", "Available", "Available"],
      ["Available", "Available", "Available"],
    ],
  },
};

export default function FaceToFaceLayout() {
  return (
    <div className="container d-none d-lg-block">
        <div className="col-12 p-0">
        <h2 className="col-sm-12 pl-0 d-inline-block">Face to Face Teaching</h2>
        <span className="col-sm-12 text-muted pl-0 d-inline-block pb-3">Only <span className="text-danger">9800￥</span></span>
        </div>
      <header className="row text-center">
        <div className="col-2 px-1">
          <p
            className="p-1"
            style={{
              backgroundColor: "#6D87D0",
              height: "50px"
            }}
          >
            Courses
          </p>
        </div>
        <div className="col-2 px-1">
          <p
            className="p-1"
            style={{
              backgroundColor: "#6D87D0",
              height: "50px"
            }}
          >
            Outlines
          </p>
        </div>
        <div className="col-1 px-1">
          <p
            className="p-1"
            style={{
              backgroundColor: "#6D87D0",
              height: "50px"
            }}
          >
            Learning Cycle
          </p>
        </div>
        <div className="col-3 px-1">
          <p
            className="p-1"
            style={{
              backgroundColor: "#6D87D0",
              height: "50px"
            }}
          >
            Free Trail
          </p>
        </div>
        <div className="col-4 px-1">
          <p
            className="p-1"
            style={{
              backgroundColor: "#6D87D0",
              height: "50px"
            }}
          >
            Schedule
          </p>
        </div>
      </header>
      <FaceToFace data={data} />
    </div>
  );
}
