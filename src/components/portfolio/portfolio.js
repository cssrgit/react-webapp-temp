import React from "react";
import "./portfolio.css";
import image1 from "../../images/portfolio1.jpg";
import image2 from "../../images/portfolio2.jpg";
import image3 from "../../images/portfolio3.jpg";
import image4 from "../../images/portfolio4.jpg";
import image5 from "../../images/portfolio5.jpg";
import image6 from "../../images/portfolio6.jpg";
import image7 from "../../images/portfolio7.jpg";
import image8 from "../../images/portfolio8.jpg";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <section className="section section-portfolio" id="portfolio-section">
      <div className="container">
        <h2 className="common-heading">Latest work</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
          esse sit.{" "}
        </p>
      </div>
      <div className="p-btns">
        <div className="btn p-btn" data-btn-num="1">
          Website
        </div>
        <div className="btn p-btn" data-btn-num="2">
          Youtube
        </div>
        <div className="btn p-btn" data-btn-num="3">
          Facbook
        </div>
      </div>
      <div className="container grid grid-three-column portfolio-images">
        <div className="img-overlay p-btn--1">
          <img src={image1} alt="portfolio" />
          <div className="overlay">
            <Link to="#" className="common-heading">
              Project 1
            </Link>
          </div>
        </div>
        <div className="img-overlay p-btn--1">
          <img src={image2} alt="portfolio" />
          <div className="overlay">
            <Link to="#" className="common-heading">
              Project 2
            </Link>
          </div>
        </div>
        <div className="img-overlay p-btn--2">
          <img src={image3} alt="portfolio" />
          <div className="overlay">
            <Link to="#" className="common-heading">
              Project 3
            </Link>
          </div>
        </div>
        <div className="img-overlay p-btn--3">
          <img src={image4} alt="portfolio" />
          <div className="overlay">
            <Link to="#" className="common-heading">
              Project 4
            </Link>
          </div>
        </div>
        <div className="img-overlay p-btn--3">
          <img src={image1} alt="portfolio" />
          <div className="overlay">
            <Link to="#" className="common-heading">
              Project 5
            </Link>
          </div>
        </div>
        <div className="img-overlay p-btn--3">
          <img src={image6} alt="portfolio" />
          <div className="overlay">
            <Link to="#" className="common-heading">
              Project 6
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
