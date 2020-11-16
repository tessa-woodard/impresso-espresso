import React from "react"
import coffeebag from "../../images/coffee-bag.png"

export default function Footer() {
  return (
    <footer className="footer py-3 bg-dark navbar-dark">
      <div className="container">
        <div className="row">
          <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4 text-white">
            <h5>Contact Us</h5>

            <p class="foot-desc mb-0 text-muted">
              Impresso Espresso
              <br />
              1 Columbus St
              <br />
              Denver, Colorado 11111
              <br />
              Phone: 1-111-111-1111
              <br />
              Email: impresso@espresso.com
              <li class="mb-2 list-unstyled ">
                <div className="coffee-bag">
                  <br />
                  <img src={coffeebag} alt="coffeebag" />
                </div>
              </li>
            </p>
          </div>

          <div class="col-md-3 mx-auto mt-4 mt-md-0 mb-0 mb-md-4 text-white">
            <h5>Opening Hours</h5>

            <ul class="list-unstyled foot-desc">
              <li class="mb-2 text-muted">
                Monday 7:00 am - 5:00 pm
                <br />
                Tuesday 7:00 am - 5:00 pm
                <br />
                Wednesday 7:00 am - 5:00 pm
                <br />
                Thursday 7:00 am - 5:00 pm
                <br />
                Friday 7:00 am - 5:00 pm
                <br />
                Saturday 8:00 am - 2:00 pm
                <br />
                Sunday Closed
              </li>
            </ul>
          </div>

          <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4 text-white">
            <h5>Site Links</h5>

            <ul class="navbar-nav mx-auto">
              <li class="mb-2">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="mb-2">
                <a class="nav-link" href="/menu">
                  Coffees, Drinks & Food Menu
                </a>
              </li>
              <li class="mb-2">
                <a class="nav-link" href="/products">
                  Retail Products
                </a>
              </li>
              <li class="mb-2">
                <a class="nav-link" href="/about">
                  Impresso Espresso - About Us
                </a>
              </li>
              <li class="mb-2">
                <a class="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-10 mx-auto col-md-10 text-white text-center text-capitalize">
            <h6>
              all rights reserved &copy; {new Date().getFullYear().toString()}{" "}
              Impresso Espresso
            </h6>
          </div>
        </div>
      </div>
    </footer>
  )
}
