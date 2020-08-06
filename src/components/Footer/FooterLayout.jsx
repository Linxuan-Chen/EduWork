import React, { useState } from "react";

import FooterText from "./FooterText";
import FooterImage from "./FooterImage";

export default function FooterLayout() {
  const [navUrls] = useState([
    "https://www.eduwork.cn/aboutus.html",
    "https://www.eduwork.cn/contactus.html",
    "https://www.eduwork.cn/jionus.html",
    "https://www.eduwork.cn/help.html",
    "https://www.lmonkey.com/",
    "https://www.eduplayer.cn/",
  ]);

  const [navButtonNames] = useState([
    "About Us",
    "Contact Us",
    "Join Us",
    "Help Center",
    "Imonkey",
    "Eduplayer",
  ]);


  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 pt-5">
              <FooterText navUrls={navUrls} navButtonNames={navButtonNames}/>
            </div>
            <div className="col-12 col-lg-2 text-center pt-5">
              <FooterImage />
            </div>
          </div>
        </div>
    </>
  );
}
