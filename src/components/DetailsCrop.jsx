import React from "react";
import RiceImg1 from "../images/Rice-farm.jpg";
import RiceImg2 from "../images/Rice-farm2.jpg";
import Wheat1 from "../images/Wheat1.jpg";
import Wheat2 from "../images/Wheat2.jpg";
import "./DetailsStyles.css";
import DetailCropData from "./DetailCropData.jsx";

function DetailsCrop() {
  return (
    <div className="details">
      <h1>Popular Crops</h1>
      <p>Without crops and vegetables nothing can do</p>
      <DetailCropData
        className="first-detail"
        heading="Rice"
        text="India is the second-largest producer of rice in the world after
      China. India accounts for approximately 20% of the worlds rice
      production. It is arguably the most important agricultural crop that
      grows in the country. Rice is a staple food pan India, and its
      cultivation is also widespread across the country.Rice prominently
      grows in high rainfall areas. It requires average temperatures of
      25°c and a minimum of 100 cms of rainfall. It’s traditionally grown
      in waterlogged rice paddy fields. Northeast plains and coastal areas
      are the major rice-producing areas of the country."
        img1={RiceImg1}
        img2={RiceImg2}
      />
      <DetailCropData
        className="first-detail-reverse"
        heading="Wheat"
        text="India is the second-largest producer of wheat in the world. It is highly dependent on this rabi crop for its agricultural income. Wheat is a staple food among Indians, especially in the northern regions.
        Wheat requires cool temperatures during its growing season in the range of about 14°c to 18°c. Rainfall of about 50 cms to 90 cms is most ideal. However, during harvesting season in the spring, wheat requires bright sunshine and slightly warmer weather. Uttar Pradesh is the largest wheat-growing state in India closely followed by Punjab and Haryana."
        img1={Wheat1}
        img2={Wheat2}
      />
    </div>
  );
}

export default DetailsCrop;
