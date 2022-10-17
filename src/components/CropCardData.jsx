import React from "react";
import "./CropStyles.css";

function CropCardData(props) {
  return (
    <div className="c-card">
      <div className="rabi-image">
        <img src={props.rabiImg} alt="rabiImg" />
      </div>
      <h4>{props.rabiTitle}</h4>
      <p>{props.rabiText}</p>
    </div>
  );
}
export default CropCardData;
