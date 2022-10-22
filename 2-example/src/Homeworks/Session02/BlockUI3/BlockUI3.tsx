import React from "react";
import styles from "./blockui3.module.css";
type Props = {
  text: string;
  color: string;
  iconName: JSX.Element;
  total: string;
};

function BlockUI3(props: Props) {
  return (
    <>
      <div
        className={styles.blocktong}
        style={{
          backgroundColor: props.color,
          marginLeft: "40px",
          marginTop: "30px",
        }}
      >
        <div style={{ marginBottom: "100px" }}>
          <i style={{ fontSize: "50px", marginLeft: "20px" }}>
            {props.iconName}
          </i>
        </div>
        <p style={{ fontSize: "20px", marginLeft: "20px" }}>{props.text}</p>
        <p style={{ fontSize: "20px", marginLeft: "20px" }}>{props.total}</p>
      </div>
    </>
  );
}

export default BlockUI3;
