import React, { useState } from "react";
import AdvisorIntroCard from "./AdvisorIntroCard";
import AdvisorVideoCard from "./AdvisorVideoCard";

/* information of lecturers */
const lecturerInfomation = {
  imgs: [
    "images/phpjs4c.png",
    "images/eduzhaoshuai.png",
    "images/eduxuxx.png",
    "images/edusunjk.png",
  ],
  names: ["Luofeng Gao", "Shuai Zhao", "Xiaoxiong Xu", "Jiankui Sun"],
  contents: [
    "15 years experience in software development and IT teaching.He has served as technical director, architect, project manager, senior software engineer and other positions in many listed companies, with solid technical skills. Domestic senior technology lecturer, Tencent network popular celebrity lecturer, the cumulative teaching of more than 10,000 hours, training nearly 100 IT teachers, training thousands of students to succeed in the IT position.",
    "Engaged in more than 10 years of program development and IT teaching work, domestic well-known IT training institutions co-founder.Judge of expert panel of National College Students Programming Contest, product manager of many famous domestic enterprises, participated in the architecture design of ten million concurrent novels under Tencent.Co-author of the detailed IT series.",
    "With more than 10 years of experience in front-end software development and teaching, I am proficient in back-end PHP and front-end technology system, proficient in using back-end PHP language for all development skills, database and cloud server, and have in-depth research on front-end node, WeChat miniprogram, Vue and React, etc.",
    'With 8 years of project development experience, I have developed nearly 100 commercial projects and managed over 100 technical teams. I have done various complicated technical support in many listed Internet companies, and led the team to solve the problems of "million-level" project reconstruction, "ten-million-level" project structure and various complex scene business processing and design.',
  ],
  titles: [
    'Founder of Smart School Cloud System & System Architect & Best-selling Author of "PHP in detail"',
    "Smart school Cloud Product Manager & Senior Web Developer & EduWork Senior Lecturer",
    "Imonkey Technology Director & EduWork Senior Lecturer",
    "Co-founder of Smart School Cloud & CTO & System Architect",
  ],
};

export default function AdvisorLayout() {
  const [currentPage, setCurrentPage] = useState(0);

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container p-0">
      <div className="row">
        <div className="col">
          <h2 className="p-0 d-inline-block">Your advisors</h2>
          <span className="text-muted pl-2">
            Not only the lecturer, but also the development director in the
            current project team
          </span>
        </div>
      </div>
      {/* introduction card */}
      <div className="row d-none d-xl-block">
        <div className="col-12">
          <AdvisorIntroCard
            currentPage={currentPage}
            lecturerInfomation={lecturerInfomation}
          />
        </div>
      </div>
      {/* video cards */}
      <div className="row mt-5">
        <AdvisorVideoCard
          lecturerInfomation={lecturerInfomation}
          changeCurrentPage={changeCurrentPage}
        />
      </div>
    </div>
  );
}
