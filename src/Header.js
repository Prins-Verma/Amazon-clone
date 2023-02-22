import React from "react";
import "./Header.css";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone"; //location icon
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"; //cart icon
import SearchIcon from "@mui/icons-material/Search"; //Search icon

function Header() {
  return (
    <div className="header">
      {/* logo */}
      {/* <div className="header_logo">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" height="50"/>
      </div> */}

      {/* Navbar */}
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
              className="header_logo"
              height="50"
            />
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
                  <LocationOnTwoToneIcon className="LocationOnIcon" />
                  <span className="address">Select your address</span>
                </a>
              </li>
              {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> */}
              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item disabled" href="#">
                      All categories
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Alexa Skills
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Amazon Fashion
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Amazon Fresh
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Amazon Pharmacy
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Apps & Games
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search Amazon.in"
                aria-label="Search "
              />
              <SearchIcon className="searchIcon" />
            </form>

            {/* Menu items for menus after search icon */}
            <div className="menu_items">
              {/* <ul> */}
              <div class="language dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <a className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      English- EN
                    </label>
                  </a>

                  <a className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      हिन्दी- HI
                    </label>
                  </a>

                  <a className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <label className="form-check-label" for="flexRadioDefault3">
                      मराठी- MR
                    </label>
                  </a>
                </ul>
              </div>

              <div class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  tabindex="-1"
                  aria-disabled="false"
                >
                  SignIn
                </a>
              </div>
              <div class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  tabindex="-1"
                  aria-disabled="false"
                >
                  Orders & Return
                </a>
              </div>

              {/* Cart button */}
              <div className="option_basket">
                <ShoppingBasketIcon className="basket_cart" />
                <div className="basket_count">0</div>
                {/* <span className="basket_cart basket_count"> 0</span> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
