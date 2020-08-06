import React from "react";
import GainsContent from './GainsContent'

export default function GainsLayout() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="d-inline-block">Your Gains</h2>
            <span className="pl-2 text-muted">Obtaining technology stacks</span>
          </div>
        </div>

            <GainsContent />

      </div>
    </div>
  );
}
