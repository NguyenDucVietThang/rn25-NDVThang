import React from "react";
import "./styles2.css";
import styles from "./blockui2.module.css";

interface Props {
  text: string;
  color: string;
  iconName: JSX.Element;
  percentage: number;
}

function BlockUI2(props: Props) {
  return (
    <div className={styles.div__bar}>
      <div style={{display:"inline-flex" , justifyContent:"center", alignItems:"center" , fontSize:"26px"}}>
        <i >{props.iconName}</i>
        <span style={{fontSize:"18px", marginTop:"5px",marginLeft:"10px" }}>{props.text}</span>
      </div>
      <div className={styles.process__bar} >
        <div
          className={styles.success}
          style={{
            backgroundColor: props.color,
            width: `${props.percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default BlockUI2;
