import React from "react";
import anh3 from "../Session02/basic-images/3.jpg";

function Footer() {
  return (
    <>
      <div className="row p-2">
        <div className="col-12 mb-3">
          <img src={anh3} />
        </div>
        <div className="col-12">
          <h2 className="fw-light fs-5 ">Technogly</h2>
          <h3 className="main__3-size">
            Harman Kadon Onyx Studio Mini, Review & Experiences
          </h3>
          <div className="text-muted">
            Ngày 11 tháng 10 năm 2022 by{" "}
            <span className="text-dark">drfurion</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
