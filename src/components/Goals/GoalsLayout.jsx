import React from "react";
import Goals from "./Goals";

const goalsData = {
  titles: [
    "Java Developer",
    "PHP developer",
    "Front-end Developer",
    "UI Designer + Product Manager",
  ],
  urls: [
    "https://www.eduwork.cn/categroy/java.html",
    "https://www.eduwork.cn/categroy/php.html",
    "https://www.eduwork.cn/categroy/web.html",
    "https://www.eduwork.cn/categroy/ui.html",
  ],
  bg: ["#3A7BC5", "#6D87D0", "#B35058", "#E23859"],
  bgImgs: [
    "images/java.jpg",
    "images/php.jpg",
    "images/web.jpg",
    "images/ui.jpg",
  ],
  leftImgs: [
    ["images/java_icon.png", "images/jteam.png"],
    ["images/php_icon.jpg", "images/jteam.png"],
    ["images/web_icon.jpg", "images/jteam.png"],
    ["images/ui_icon.jpg", "images/jteam.png"],
  ],
  leftTexts: [
    ["One of the most widely used programming language", "My group"],
    ["One of the best back-end programming language", "My group"],
    ["The best front-end technologies", "My group"],
    ["A position that every company needs", "My group"],
  ],
  middleImgs: [
    ["images/javait.png", "images/cwt.png", "images/cjob.png"],
    ["images/phpit.png", "images/cwt.png", "images/cjob.png"],
    ["images/webit.png", "images/cwt.png", "images/cjob.png"],
    ["images/uiit.png", "images/cwt.png", "images/cjob.png"],
  ],
  middleTexts: [
    ["Skills Learnt", "Problems Solved", "Experience Obtained"],
    ["Skills Learnt", "Problems Solved", "Experience Obtained"],
    ["Skills Learnt", "Problems Solved", "Experience Obtained"],
    ["Skills Learnt", "Problems Solved", "Experience Obtained"],
  ],
  rightImgs: [
    ["images/javajl.png", "images/javajt.png"],
    ["images/phpjl.png", "images/phpjt.png"],
    ["images/webjl.png", "images/webjt.png"],
    ["images/uijl.png", "images/uijt.png"],
  ],
  rightTexts: [
    [
      `Taking work 
      with 0 basics`,
      `Study+Work
      growth plan`,
      "Resume Obtained",
    ],
    [
      `Taking work 
        with 0 basics`,
      `Study+Work
        growth plan`,
      "Resume Obtained",
    ],
    [
      `Taking work 
        with 0 basics`,
      `Study+Work
        growth plan`,
      "Resume Obtained",
    ],
    [
      `Taking work 
        with 0 basics`,
      `Study+Work
        growth plan`,
      "Resume Obtained",
    ],
  ],
};

export default function GoalsLayout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="p-0 d-inline-block">Internship goals</h2>
          <span className="pl-2 text-muted">Arrange development positions in the project team</span>
        </div>
      </div>
      <Goals goalsData={goalsData} />
    </div>
  );
}
