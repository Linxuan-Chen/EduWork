import React from "react";
import MobileCarousel from './MobileCarousel';
import PcCarousel from './PcCarousel'

export default function EnvironmentLayout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="col-sm-12 pl-0 d-inline-block">Work Environment</h2>
          <span className="col-sm-12 text-muted pl-0 d-inline-block pb-3">A friendly and comfortable environment</span>
        </div>
      </div>
      <div className="row">
        <div className="col d-lg-none"><MobileCarousel /></div>
        <div className="col d-none d-lg-block"><PcCarousel /></div>
      </div>
    </div>
  );
}
