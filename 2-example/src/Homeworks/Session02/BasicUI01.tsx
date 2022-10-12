import React from "react";
import anh01 from "../Session02/basic-images/1.jpg";

type Props = {};

function Footer({}: Props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row w-50 border border-secondary mt-5 mx-5  ">
          <div className="col-md-6">
            <img src={anh01} />
          </div>
          <div className="col-md-6 col-12">
            <ul className=" list-group-flush content-center mt-5 mb-4">
              <li className="list-group-item fs-3 lh-lg">Clothing & Apparel</li>
              <li className="list-group-item fw-light lh-lg">Accessories</li>
              <li className="list-group-item fw-light lh-lg">Bags</li>
              <li className="list-group-item fw-light lh-lg">Kid's Fashion</li>
              <li className="list-group-item fw-light lh-lg">Mens</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
