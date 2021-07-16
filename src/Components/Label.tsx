import React from "react";
import "./Label.scss";
import Doro from "../Media/backpackMan.png";

export const Label = () => {
  return (
    <div className="holder">
      <div className="main-com">
        <div className="image">
          <img src={Doro} />
        </div>
        <div className="please">
          <h1>
            MEN <br /> BACKPACK
          </h1>
          <p>View Collection</p>
        </div>
      </div>

      <div className="main-com">
        <div className="please">
          <h1>
            MEN <br /> BACKPACK
          </h1>
          <p>View Collection</p>
        </div>

        <div className="image">
          <img src={Doro} />
        </div>
      </div>
    </div>
  );
};
export default Label;
