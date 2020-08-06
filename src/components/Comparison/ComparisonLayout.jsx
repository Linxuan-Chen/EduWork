import React from "react";
import Comparison from "./Comparison";

const modes = {
  traditional: {
    title: "Traditional Train Mode",
    text: [
      "None",
      "Simulated projects",
      "Fake resume",
      "Cramming training",
      "Professional lecturers",
      "Not solid",
      "Not enough",
      "Not systematic",
    ],
    percentage: [10, 30, 40, 65, 40, 55, 50, 30],
  },
  new: {
    title: "Internship Train Mode",
    text: [
      "Work while study, real work experience",
      "Paticipate in at least 5 online commercial projects",
      "Real resume",
      "Individual dependent study plan",
      "CTOs and senior developers in different companies",
      "Use while study, solid knowledge",
      "Endless knowledge with endless projects",
      "Learning programing skills instead of just a programing language",
    ],
    percentage: [80, 70, 60, 85, 70, 90, 80, 88],
  },
  aspects: [
    "Work Experience",
    "Project Experience",
    "Job Seeking",
    "Teaching Process",
    "Falcuty",
    "Technical skills",
    "More knowledge",
    "Concentration",
  ],
};

export default function ComparisonLayout() {
  return (
    <div className="container p-0 d-none d-lg-block">
      <div className="row">
        <div className="col">
          <h2 className="p-0 d-inline-block">Comparision</h2>
          <span className="text-muted pl-2">Self-motivated Study</span>
        </div>
      </div>
      <Comparison modes={modes} />
    </div>
  );
}
