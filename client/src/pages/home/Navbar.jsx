import React from "react";
import MSPlogo from "../../Images/msplogo.png";
const Header = () => {
  return (
    <div className="">
      <div className="imgSection">
        {/* <a href=""><img src={MSPlogo} alt="" /></a> */}
      </div>
      <div className="menuSection">
        <header className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container ">
            <a className="navbar-brand" href="/">
              {" "}
              <img src={MSPlogo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse menu-left" id="navbarNav">
              <ul className="navbar-nav nav-list ">
                {/* Add your navigation links here */}
                <li className="nav-item ">
                  <a className="nav-link " href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Tracking
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item Dropdown"></li>
              </ul>
            </div>
          </div>
          <div className="rightMenu ">
            <ul>
              <li>
                <a href="">
                  {" "}
                  <img src={MSPlogo} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <img src={MSPlogo} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <img src={MSPlogo} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <img src={MSPlogo} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
