import React from "react";
import { Card, ListGroup, Badge } from "react-bootstrap";

export default function FollowUsCard() {
  return (
    <Card className="border border-warning border-left-0 border-right-0 border-bottom-0 shadow-lg">
      <Card.Body>
        <Card.Title className="d-flex">
          <h5 className="d-inline-block">
            Latest News<small className="text-muted pl-2">EduWork</small>
          </h5>
          <div className="d-inline-block ml-auto ">
            <a
              href="https://www.eduwork.cn/weball/index.html"
              className="small text-muted text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              More >>
            </a>
          </div>
        </Card.Title>
        <ListGroup>
          <ListGroup.Item className="text-truncate border-0 p-0 py-2">
            <Badge variant="warning">1</Badge>
            <Card.Link
              href="https://www.eduwork.cn/weball/index.html"
              className=" text-dark pl-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web full-stack course, 5 months face-to-face teaching with 1 month
              internship.
            </Card.Link>
          </ListGroup.Item>
          <ListGroup.Item className="text-truncate border-0 p-0 py-2">
            <Badge variant="warning">2</Badge>
            <Card.Link
              href="https://www.eduwork.cn/webap.html"
              className=" text-dark pl-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              120-day course plan, and the quality of teaching is guaranteed.
            </Card.Link>
          </ListGroup.Item>
          <ListGroup.Item className="text-truncate border-0 p-0 py-2">
            <Badge variant="warning">3</Badge>
            <Card.Link
              href="https://www.eduwork.cn/resume/webjl.html"
              className=" text-dark pl-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              After taking the course, you resume might look like this.
            </Card.Link>
          </ListGroup.Item>
          <ListGroup.Item className="text-truncate border-0 p-0 py-2">
            <Badge variant="dark">4</Badge>
            <Card.Link
              href="https://www.eduwork.cn/aboutus.html"
              className=" text-dark pl-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eduwork initiates new training modes, click to know more.
            </Card.Link>
          </ListGroup.Item>
          <ListGroup.Item className="text-truncate border-0 p-0 py-2">
            <Badge variant="dark">5</Badge>
            <Card.Link
              href="https://www.eduwork.cn/webtx.html"
              className=" text-dark pl-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web full-stack developer course should be designed like this.
            </Card.Link>
          </ListGroup.Item>
          <ListGroup.Item className="text-truncate border-0 p-0 py-2">
            <Badge variant="dark">6</Badge>
            <Card.Link
              href="http://www.eduplayer.cn/"
              className=" text-dark pl-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smart school cloud(Eduplayer) system is upgraded to version 4.0.
            </Card.Link>
          </ListGroup.Item>
          <ListGroup.Item className="text-truncate border-0 p-0 py-2">
            <Badge variant="dark">7</Badge>
            <Card.Link
              href="https://www.lmonkey.com/"
              className=" text-dark pl-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              [IMonkey] We only provide the best courses
            </Card.Link>
          </ListGroup.Item>
          <ListGroup.Item className="text-truncate border-0 p-0 py-2">
            <Badge variant="dark">8</Badge>
            <Card.Link
              href="https://www.eduwork.cn/article_0110.html"
              className=" text-dark pl-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              [EduWork] Study while work, and work while study.
            </Card.Link>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
