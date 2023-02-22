import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images.news18.com/ibnlive/uploads/2023/02/farzi-review-16759738883x2.jpg"
          alt=""
        />

        {/* first_container is the main container which has 3 rows and each rows has 3 cards (total 9 main cards) */}
        <div className="first_container">
          {/* First Row */}
          <div className="first_row">
            {/* First Row + First card */}
            <div className="travel">
              <h4>Book in advance for Holi</h4>
              <div className="book_plane">
                <img src="/Images/plane.jpg" alt="" className="src" />
                {/* <div className="flights"> Get up to ₹2000 off on flights</div> */}
              </div>
              <div className="book_train">
                <img src="/Images/train.jpeg" alt="" className="src" />
                {/* <div>Zero payment gateway charges</div> */}
              </div>
              <div className="book_bus">
                <img src="/Images/bus.jpeg" alt="" className="src" />
                {/* <div>Guaranteed rewards on bus tickets</div> */}
              </div>
              <div className="book_trolley">
                <img src="/Images/trolley.jpeg" alt="" className="src" />
                {/* <div>Products for your travel needs</div> */}
              </div>
              <div className="book_more">
                <a>See more</a>
              </div>
            </div>

            {/* First Row + Second card */}
            <div className="clearance">
              <h4> Up to 70% off | Clearance store</h4>
              <img src="/Images/laptop.png" alt="" className="laptop_image" />
            </div>

            {/* First Row + Third card */}
            <div className="automotive">
              <h4>Automative essentials | Up to 60% off</h4>
              <div className="auto_clean">
                <img src="/Images/cleaning.png" alt="" />
                {/* <div className="flights"> Get up to ₹2000 off on flights</div> */}
              </div>
              <div className="auto_tyre">
                <img src="/Images/car.png" alt="" />
                {/* <div>Zero payment gateway charges</div> */}
              </div>
              <div className="auto_helmet">
                <img src="/Images/helmet.png" alt="" />
                {/* <div>Guaranteed rewards on bus tickets</div> */}
              </div>
              <div className="auto_vaccum">
                <img src="/Images/vaccum.png" alt="" />
                {/* <div>Products for your travel needs</div> */}
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="second_row">
            {/* Second Row + first card */}
            <div className="brand">
              <h5>Up to 60% off | Amazon Brands & more</h5>
              <div className="brand_home">
                <img src="/Images/home.png" alt="" />
                {/* <div className="flights"> Get up to ₹2000 off on flights</div> */}
              </div>
              <div className="brand_electronic">
                <img src="/Images/electronic.png" alt="" />
                {/* <div>Zero payment gateway charges</div> */}
              </div>
              <div className="brand_daily">
                <img src="/Images/daily.png" alt="" />
                {/* <div>Guaranteed rewards on bus tickets</div> */}
              </div>
              <div className="brand_fashion">
                <img src="/Images/fashion.png" alt="" />
                {/* <div>Products for your travel needs</div> */}
              </div>
            </div>

            {/* Second Row + second card */}
            <div className="tools">
              <h5>Up to 60% off | Professional tools, testi...</h5>
              <div className="tools_professional">
                <img src="/Images/professional.png" alt="" />
              </div>
              <div className="tools_instrument">
                <img src="/Images/instruments.png" alt="" />
              </div>
              <div className="tools_supply">
                <img src="/Images/supply.png" alt="" />
              </div>
              <div className="tools_medical">
                <img src="/Images/medical.png" alt="" />
              </div>
            </div>

            {/* Second Row + third card */}
            <div className="home_style">
              <h5>Revamp your home in style</h5>
              <div className="bedsheet">
                <img src="/Images/bedsheet.png" alt="" />
              </div>
              <div className="decoration">
                <img src="/Images/decoration.png" alt="" />
              </div>
              <div className="storage">
                <img src="/Images/storage.png" alt="" />
              </div>
              <div className="light">
                <img src="/Images/light.png" alt="" />
              </div>
            </div>

            {/* Second Row + Fourth card */}
            <div className="upgrade_home">
              <h5>Upgrade your home | Amazon Brands & more</h5>
              <div className="appliance">
                <img src="/Images/appliance.png" alt="" />
              </div>
              <div className="comfort">
                <img src="/Images/comfort.png" alt="" />
              </div>
              <div className="container">
                <img src="/Images/container.png" alt="" />
              </div>
              <div className="frames">
                <img src="/Images/frames.png" alt="" />
              </div>
            </div>
          </div>

          {/* Third Row */}
          {/* <div className="third_row">
            <h1>Hello</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
