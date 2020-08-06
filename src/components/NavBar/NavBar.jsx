import React from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";

import style from "./NavBar.module.scss";

export default function NavBar() {
  //  QR code section class name concatenation

  //  Brandlogo class name concatenation

  return (
    <div>
      <Navbar bg="light" expand="lg" className="p-0 pt-1">
        <Navbar.Brand href="/1">
          <img src="images/logo.png" alt="BrandLogo" className="d-block d-lg-none" id={style.brand}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* Eduwork button linked to eduwork home page */}
            <Nav.Link
              href="/#"
              target="_blank"
              rel="noopener noreferrer"
              className={style.button__eduwork}
            >
              Eduwork
            </Nav.Link>
            {/* Imonkey button linked to Imoneky home page starts*/}
            <Nav.Link
              href="https://www.lmonkey.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={style.button__imonkey}
            >
              Imonkey
            </Nav.Link>
            {/* Smart school cloud button */}
            <Nav.Link
              href="https://www.eduplayer.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className={style.button__eduplayer}
            >
              Eduplayer
            </Nav.Link>
            {/* Training Modes dropdows*/}
            <NavDropdown title="Training Modes" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Face-to-face VIP Mode
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Course-based Mode
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Internship Mode
              </NavDropdown.Item>
            </NavDropdown>
            {/* Training Orientation dropdows*/}
            <NavDropdown title="Orientations" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://www.eduwork.cn/weball/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web Full Stack Developer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://www.eduwork.cn/categroy/java.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Java Full Stack Developer
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.eduwork.cn/categroy/php.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                PHP Full Stack Developer
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.eduwork.cn/categroy/web.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web Front End Developer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://www.eduwork.cn/categroy/ui.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                UI/UX designer + Prodect Manager
              </NavDropdown.Item>
            </NavDropdown>
            {/* adv starts */}
            <Nav.Link
              href="https://www.eduwork.cn/weball/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Web Course<i><mark className='text-danger'>￥9800</mark></i><del>￥19800</del></span>
            </Nav.Link>
            {/* adv ens */}
          </Nav>
          {/* contact us dropdowns */}
          <Form inline>
            <NavDropdown
              title="Contact Us"
              id="basic-nav-dropdown"
              className={style.button__wechat}
            >
              <NavDropdown.Item>Wechat: 158-0168-4338</NavDropdown.Item>
              <NavDropdown.Item>QQ: 97484619</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <img
                  src="images/qrcode.jpg"
                  className="img-fluid"
                  id={style.qr_code}
                  alt="Wechat QR Code"
                />
              </NavDropdown.Item>
            </NavDropdown>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
