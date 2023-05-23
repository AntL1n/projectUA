import React from "react";
import "./Card.scss";
import logoSvg from "../../assets/img/star.fill.svg";
import productPng from "../../assets/img/bg.png";
import likeSvg from "../../assets/img/24px.svg";
import otherSvg from "../../assets/img/Shape.svg";
import flagSvg from "../../assets/img/flag-round-250 1.svg";

const Card = ({ darkTheme, lightTheme }) => {
  const darkCard = `card ${darkTheme}`;
  const lightCard = `card ${lightTheme}`;

  return (
    <div className="wrapper">
      <div className={darkCard}>
        <div className="card-top">
          <div className="rate">
            <img className="logo" src={logoSvg} alt="logo" />
            <span className="rate-light">3.7</span>
          </div>
          <div className="option">
            <img src={likeSvg} alt="" />
            <img src={otherSvg} alt="" />
          </div>
        </div>
        <div className="product">
          <img className="product-img" src={productPng} alt="product" />
          <div class="dots">
            <div class="dot dot-light"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div className="card-bottom">
          <p className="subtitle">Writers’ Tears</p>
          <p className="title-light">
            Whiskey Writers' Tears Red Head, Writers’ Tears
          </p>
          <p className="subtitle">
            Speyside Single Malt Scotch Whisky Distillery Bottling
          </p>
        </div>
        <div className="card-footer-dark">
          <p className="light-color">500 ml</p>
          <div className="country">
            <img className="country-flag" src={flagSvg} alt="flag" />
            <p>Ireland</p>
          </div>
        </div>
      </div>
      <div className={lightCard}>
        <div className="card-top ">
          <div className="rate">
            <img className="logo" src={logoSvg} alt="logo" />
            <span className="rate-dark">3.7</span>
          </div>
          <div className="option">
            <img src={likeSvg} alt="" />
            <img src={otherSvg} alt="" />
          </div>
        </div>
        <div className="product">
          <img className="product-img" src={productPng} alt="product" />
          <div class="dots">
            <div class="dot dot-dark"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div className="card-bottom">
          <p className="subtitle">Writers’ Tears</p>
          <p className="title-dark">
            Whiskey Writers' Tears Red Head, Writers’ Tears
          </p>
          <p className="subtitle">
            Speyside Single Malt Scotch Whisky Distillery Bottling
          </p>
        </div>
        <div className="card-footer-light">
          <p className="light-color">500 ml</p>
          <div className="country">
            <img className="country-flag" src={flagSvg} alt="flag" />
            <p className="country-text">Ireland</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
