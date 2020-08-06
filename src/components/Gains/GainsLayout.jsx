import React from "react";
import GainsContent from './GainsContent'

export default function GainsLayout() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="col-sm-12 pl-0 d-inline-block">Your Gains</h2>
            <span className="col-sm-12 text-muted pl-0 d-inline-block pb-3">Obtaining technology stacks</span>
          </div>
        </div>

            <GainsContent />

      </div>
    </div>
  );
}
