import React from "react";
import styles from "./bubble.module.css";

const CustomName = () => {
  return (
    <div className="grid place-content-center">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300">
      {"Dhananjaya Somanna".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default CustomName;