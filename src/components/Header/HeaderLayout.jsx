import React from "react";
import { useState } from "react";

import BrandLogo from "./BrandLogo";
import Slogan from "./Slogan.jsx";
import Utils from "./Utils.jsx";

function Header() {
  /* Text of Imonkey dropdowns */
  const [ImonkeyData] = useState([
    "Java Full-Stack",
    "Python Full-Stack",
    "Golang Full-Stack",
    "PHP Full-Stack",
    "Big Data Full-Stack",
    "Web Front-End",
    "UI/UE Full-Stack",
    "Linux Full-Stack",
  ]);

  /* Text of Eduplayer dropdowns */
  const [EduplayerData] = useState([
    "CRM System",
    "Online Education System",
    "Examination System",
    "Financial System",
    "Educational Administration System",
    "Job Bank",
    "Agent System",
    "Distribution System",
  ]);

  /* URLs of Imonkey dropdowns */
  const [ImonkeyURL] = useState({
    urls: [
      "https://www.lmonkey.com/page/java",
      "https://www.lmonkey.com/page/python",
      "https://www.lmonkey.com/page/go",
      "https://www.lmonkey.com/page/php",
      "https://www.lmonkey.com/page/bigdata",
      "https://www.lmonkey.com/page/h5",
      "https://www.lmonkey.com/page/ui",
      "https://www.lmonkey.com/page/linux",
    ],
    home: "https://www.lmonkey.com/",
  });

  /* URLs of Eduplayer dropdowns */
  const [EduplayerURL] = useState({
    urls: [
      "https://www.eduplayer.cn/All.html",
      "https://www.eduplayer.cn/All.html",
      "https://www.eduplayer.cn/All.html",
      "https://www.eduplayer.cn/All.html",
      "https://www.eduplayer.cn/All.html",
      "https://www.eduplayer.cn/All.html",
      "https://www.eduplayer.cn/All.html",
      "https://www.eduplayer.cn/All.html",
    ],
    home: "https://www.eduplayer.cn/",
  });
  
  return (
    <div className='container mt-4'>
          <div className="row">
            {/* Brand logo section starts*/}
            <div className="col-2 d-none d-lg-block">
              <BrandLogo />
            </div>
            {/* Brand logo section ends*/}

            {/* Slogan section starts*/}
            <div className="col-12 col-lg-6 pt-3 text-center">
              <Slogan />
            </div>
            {/* Slogan section ends*/}

            {/* Imonkey dropdowns section starts*/}
            <div className="col-2 text-right pt-2  d-none d-lg-block">
              <Utils name="Imonkey" data={ImonkeyData} url={ImonkeyURL} bgColor={'success'}/>
            </div>
            {/* Imonkey dropdowns section ends*/}

            {/* Eduplayer dropdowns section starts*/}
            <div className="col-2  text-left pt-2 d-none d-lg-block">
              <Utils name="Eduplayer" data={EduplayerData} url={EduplayerURL} bgColor={'info'}/>
            </div>
            {/* Eduplayer dropdowns section ends*/}
          </div>
    </div>
  );
}

// export {BrandLogo, Slogan, Utils};
export default Header;
export { BrandLogo, Slogan, Utils };
