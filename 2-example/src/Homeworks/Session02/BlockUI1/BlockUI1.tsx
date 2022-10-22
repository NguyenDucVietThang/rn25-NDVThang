import React from "react";
// import "./styles.css";
import styles from "./chartbar.module.css";

interface ChartBarProps {
  text?: string;
  color1?: string;
  color2?: string;
  percentage?: number;
}

function BlockUI1(props: ChartBarProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.column_left}
        style={{ backgroundColor: props.color1, width: "150px" }}
      >
        <span className={styles.text}> {props.text}</span>
      </div>
      <div className={styles.column_right}>
        <div
          className={`${styles.column_percentage_left} rectGrow`}
          style={{
            backgroundColor: props.color2,
            width: `${props.percentage}%`,
          }}
        >
          <span className={styles.text}>{props.percentage}%</span>
          <span className={styles["text-big"]}></span>
        </div>
        <div className={styles.column_percentage_right}></div>
      </div>
    </div>
  );
}

export default BlockUI1;
