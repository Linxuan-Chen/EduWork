import React from "react";
import Card from './FollowUsCard'
import FollowUsPlayer from './FollowUsPlayer'

export default function FollowUsLayout() {
  return (
    <div className="container">
      <div className="col-12 p-0">
        <h2 className="col-sm-12 pl-0 d-inline-block">Follow Us</h2>
        <span className="col-sm-12 text-muted pl-0 d-inline-block pb-3">Rebuilding training modes of IT talents</span>
      </div>
      <div className="row">
        <div className="col-12 col-lg-8 mb-2"><FollowUsPlayer /></div>
        <div className="col-12 col-lg-4"><Card /></div>
      </div>
    </div>
  );
}
