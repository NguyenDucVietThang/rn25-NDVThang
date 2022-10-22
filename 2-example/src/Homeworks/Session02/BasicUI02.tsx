import React from "react";
import anh2 from "../Session02/basic-images/2.jpg";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

// import
type Props = {};

function BasicUI02({}: Props) {
  return (
    <div>
      <div className="row p-4">
        <div className="col-12">
          <img src={anh2} alt="Television" />
        </div>
        <div className="col-12">
          <h2 className="">YOUNG SHOP</h2>
          <h3 className="text-primary">SAMSUNG IHBCD 1000 INCH</h3>
          <div className="text-warning">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar /> <span className="text-muted">02</span>
          </div>
          <span>$599</span>
        </div>
      </div>
    </div>
  );
}

export default BasicUI02;
