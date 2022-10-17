import React from "react";
import CropCardData from "./CropCardData";
import "./CropStyles.css";
import Rabi1 from "../images/rabi1.jpg";
import Rabi2 from "../images/Rabi2.jpg";
import Rabi3 from "../images/Rabi3.jpeg";

function CropCard() {
  return (
    <div className="crop-card">
      <h1>Rabi Crops</h1>
      <p>Sown in winter and harvested in summer.</p>
      <div className="rabiCard">
        <CropCardData
          rabiImg={Rabi1}
          rabiTitle="Pea"
          rabiText="A very popular vegetable crop, peas are grown in pods and can be of two types – the garden pea and the field pea. China and India are the largest producers of this vegetable and in India, Uttar Pradesh and Madhya Pradesh are among the highest producers of this crop."
        />
        <CropCardData
          rabiImg={Rabi2}
          rabiTitle="Mustard"
          rabiText="Mustard is a cool season crop that can be grown in a short growing season. Varieties of yellow mustard usually mature in 80 to 85 days whereas brown and oriental types require 90 to 95 days. Seedlings are usually somewhat tolerant to mild frosts after emergence, but severe frosts can destroy the crop."
        />
        <CropCardData
          rabiImg={Rabi3}
          rabiTitle="Coriander"
          rabiText="Coriander is an important spice crop having a prime position in flavouring food. The plant is a thin stemmed, small, bushy herb, 25 to 50 cm in height with many branches and umbels. Leaves are alternate, compound. The whole plant has a pleasant aroma. Inflorescence is a compound umbel comprises 5 smaller umbels. "
        />
      </div>
    </div>
  );
}
export default CropCard;
