import React from "react";
import "../../util/sidebar";
import "./Home.css";
import Form from "./FormDashboard";
import FormDashboard from "./FormDashboard";
function Side() {
  const demo = () => {
    document.ready(function () {
      "#sidebarCollapse".on("click", function () {
        "#sidebar".toggleClass("active");
      });
    });
  };
  return (
    <div>
      <div className="wrapper">
        {/* Sidebar  */}
        <nav id="sidebar">
          <div className="">
            {/* <h3>Sidebar</h3> */}
          </div>
          <ul className="list-unstyled components">
            <p>Msp-Medical</p>
           
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Setting
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a href="#">Page 1</a>
                </li>
                <li>
                  <a href="#">Page 2</a>
                </li>
                <li>
                  <a href="#">Page 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a 
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
             Entry</a>
            </li>
          
            <li>
              <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
              >Report</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
         
        </nav>
        {/* Page Content  */}
        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <FormDashboard/>
          </nav>
     
        </div>
        
      </div>
    </div>
  );
}

export default Side;
