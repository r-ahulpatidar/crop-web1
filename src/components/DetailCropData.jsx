import React from "react";
import "./DetailsStyles.css";

function DetailCropData(props) {
  return (
    <div className={props.className}>
      <div className="detail-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="detail-image">
        <img src={props.img1} alt="rice-img1" />
        <img src={props.img2} alt="rice-img2" />
      </div>
    </div>
  );
}
export default DetailCropData;
