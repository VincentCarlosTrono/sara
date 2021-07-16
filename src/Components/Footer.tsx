import React from "react";
import "./Footer.scss";
import footer1 from "../Media/footerstore1.png";
import footer2 from "../Media/footerstore2.png";

export const Footer = () => {
  return (
    <div className="main-div">
      <div className="sara">
        <h1>SARA</h1>
        <ul>
          <li>Product store </li>
          <img src={footer1} />
          <img src={footer2} />
        </ul>
      </div>{" "}
      <div className="sara">
        <h1>EXPLORE</h1>
        <ul>
          <li>Home </li>
          <li>Featured </li>
          <li>New </li>
          <li>Subscribe </li>
        </ul>
      </div>{" "}
      <div className="sara">
        <h1>OUR SERVICES</h1>
        <ul>
          <li>Pricing</li>
          <li>Free Shipping </li>
          <li>Gift Cards </li>
        </ul>
      </div>{" "}
      <div className="sara">
        <h1>FOLLOW</h1>
        <div className="accounts">
          <ul>
            {/* @ts-ignore */}
            <box-icon name="facebook" type="logo"></box-icon>
          </ul>{" "}
          <ul>
            {/* @ts-ignore */}

            <box-icon name="twitter" type="logo"></box-icon>
          </ul>{" "}
          <ul>
            {/* @ts-ignore */}

            <box-icon name="instagram-alt" type="logo"></box-icon>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
