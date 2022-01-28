import React from "react";
import {Link} from "react-router-dom";
import "./Style.css";
export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://cdn1.vectorstock.com/i/thumb-large/95/70/logotype-of-agriculture-logo-with-a-field-vector-20999570.jpg"
              alt=""
              width={30}
              height={44}
              className="d-inline-block align-text-top"
            />
            Multi-Merchant
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse navcolor" id="navbarNav">
            <ul className="navbar-nav">
              <Link to = "/">
              <li className="nav-item">
                <a
                  className="nav-link active navitems"
                  aria-current="page"
                  href="#"
                  
                >
                  Home
                </a>
              </li>
              
              </Link>
             <Link to = "/MerchantData"><li className="nav-item">
                <a className="nav-link" href="#">
                  Merchant
                </a>
              </li></Link>
              <Link to = "/CustomerData">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Customer
                </a>
              </li></Link>
              
            </ul>
          </div>
        </div>
        <Link to = "/MerchantForm">
        <button type="button" class="btn btn-success">
          Merchant
        </button>
        </Link>
        
        &nbsp;
        <Link to = "/CustomerForm">
        <button type="button" class="btn btn-success">
          Customer
        </button>
        </Link>
        
      </nav>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active pic">
            <img
              src="https://t3.ftcdn.net/jpg/00/88/03/38/360_F_88033857_UKzEapQ3PwxfhHzAaxiEdyOW7FLCCm3W.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item pics">
            <img
              src="https://envato-shoebox-0.imgix.net/6269/37af-76c5-4a8e-a989-e3c7677c37b8/3428_7.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=597911adddfbad4cf6db7025852e962e"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item pics">
            <img
              src="https://www.acresinsurance.co.uk/wp-content/uploads/sites/91/2020/05/Selling-Food-Products--1100x620.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <footer className="text-center text-lg-start bg-light text-muted ">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          {/* <div className="me-5 d-none d-lg-block footerhead">
            <span>Get connected with us on social networks:</span>
          </div> */}

          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-5 footerstyle">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  Multi-Merchant
                </h6>
                <p>
                  This Company was strated by SR in the year of 1976 the main
                  goal of this company is to provide online selling to merchants
                  for their farming products.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Farming Products
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Groccerries
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vegitables
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3" /> India
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  sr@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3" /> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div> */}
        {/* Copyright */}
      </footer>
    </>
  );
}
