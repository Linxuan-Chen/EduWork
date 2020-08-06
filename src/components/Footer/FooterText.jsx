import React from "react";
import { Nav } from "react-bootstrap";

export default function FooterText(props) {
  return (
    <div>
      <div>
        {/* Plateform introduction */}
        <p className="mb-0">
          EduWork is an internship platform dedicated to programmer training
          under Eduplayer cloud system.
        </p>

        {/* Footer nav bar starts */}
        <Nav>
          {/* Traverse nav button names to return nav buttons with associated URLs */}
          {props.navButtonNames.map((element, index) => {
            return (
              <Nav.Item key={index}>
                <Nav.Link
                  className="text-light pl-0"
                  key={index}
                  href={props.navUrls[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {element}
                </Nav.Link>
              </Nav.Item>
            );
          })}
          {/* Traversal ends */}
        </Nav>
        {/* Footer nav bar starts */}

        {/* Copy right info starts */}
        <p>
          <i className="text-muted">&copy;2018-2020</i>{" "}
          <span className="text-muted pl-1 pr-5">
            Beijing Smart School Cloud Network Technology Co.LTD
          </span>{" "}
          <span className="text-muted">All Right Reserved</span>
        </p>
        {/* Copy right info ends */}
      </div>
    </div>
  );
}
