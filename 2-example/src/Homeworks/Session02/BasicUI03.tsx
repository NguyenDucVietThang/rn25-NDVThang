import React from "react";
import anh3 from "../Session02/basic-images/3.jpg";

type Props = {};

function Footer({}: Props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12">
            <ul className="list-group list-group-flush content-left mb-4">
              <li>
                <img src={anh3}/>
              </li>
              <li className="list-group lh-lg fw-light">Technology</li>
              <li className="list-group fw-bold">
                Harman Kadon Onyx Studio Mini, Review & Experiences
              </li>
              <li className="list-group lh-lg text-muted ">Feb 21,2021 by drfurion</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
