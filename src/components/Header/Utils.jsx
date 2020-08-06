import React from "react";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";

export default function Utils(props) {
  return (
    <div>
      <Dropdown as={ButtonGroup} alignRight>
        <Button
          variant={props.bgColor}
          href={props.url.home}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.name}
        </Button>

        <Dropdown.Toggle
          split
          variant={props.bgColor}
          id="dropdown-split-basic"
        />
        <Dropdown.Menu>
          {/* Traverse urls and botton names from Header component to dropdowns */}
          {props.url.urls.map((element, index) => {
            return (
              <Dropdown.Item
                key={index}
                href={element}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.data[index]}
              </Dropdown.Item>
            );
          })}
          {/* Traversal ends */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
