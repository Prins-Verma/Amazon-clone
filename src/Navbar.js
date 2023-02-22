import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

function Navbar() {
  return (
    // <div className="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <div class="container-fluid">
        <MenuIcon />
        <a class="navbar-brand" href="#">
          All
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Amazon miniTV
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Best Sellers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Mobiles
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Customer Service
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Today's Deals
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Electronics
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Prime
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Amazon Pay
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // </div>
  );
}

export default Navbar;
