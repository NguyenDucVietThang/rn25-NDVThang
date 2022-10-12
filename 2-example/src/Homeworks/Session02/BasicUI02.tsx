import React from "react";
import anh2 from "../Session02/basic-images/2.jpg";
import StarsRating from 'react-star-rate';

type Props = {};

function Footer({}: Props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-12">
            <ul className="list-group list-group-flush content-left mb-4">
              <li><img src={anh2}/></li>
              <li className="list-group-item">YOUNG SHOP</li>
              <li className="list-group text-info">Samsung UHD TV 24inch</li>
              <li className="list-group ">Rating</li>
              <li className="list-group ">$599</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
