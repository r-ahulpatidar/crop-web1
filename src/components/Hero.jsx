import React from "react";

function Hero(props) {
  return (
    <div className={props.csName}>
      <img src={props.cropImage} alt="crop-img1" />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.urlClass}>
          {props.urlText}
        </a>
      </div>
    </div>
  );
}

export default Hero;
