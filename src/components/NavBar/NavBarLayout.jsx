import React from "react";
import NavBar from "./NavBar";

export default function NavBarLayout() {
  return (
    <div className='container'>
      {/* Add shadow and padding-left starts*/}
      <nav className="shadow-sm pl-1">
      {/* Add shadow and padding-left ends */}

        <div className="row">
          <div className="col">
            <NavBar />
          </div>
        </div>
      </nav>
    </div>
  );
}
