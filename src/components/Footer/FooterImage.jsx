import React from "react";

export default function FooterImage() {

  return (
      <figure className="figure">
        <img src="images/qrcode.png" className="figure-img img-fluid rounded" alt="QRcode" style={ {
            maxWidth: '100px'
        } }/>
        <figcaption className="figure-caption text-light">
          Follow Us
        </figcaption>
      </figure>
  );
}
