import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#000d6b" }}
      className="main-div-footer-footer"
    >
      <div class=" my-5">
        {/* <!-- Footer --> */}
        <footer class="text-center text-lg-start text-dark" style={{}}>
          {/* <!-- Section: Links  --> */}
          <section style={{ color: "white" }}>
            <div class="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div class="c-rw-div">
                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 class="text-uppercase fw-bold">Company name</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <div className="jbi-foot">
                    ChrisNFTs is your home for World lagest blockchain
                  </div>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold">Products</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>Home</p>
                  <p>News</p>
                  <p>About Us</p>
                  <p>Genre</p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold">Contact Us</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <i class="fas fa-home mr-3"></i> ChrisNFTs Secretariate:
                    Owerri Imo State
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> djnchrys@gmail.com
                  </p>
                  <p>
                    <i class="fas fa-phone mr-3"></i> +234816757488
                  </p>
                  <p>
                    <i class="fas fa-print mr-3"></i> +234 (818) 518-3179
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          <div class="text-center p-3" style={{ color: "white" }}>
            © 2023 Copyright: ChrisNFTs
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
    </div>
  );
};

export default Footer;
