import React from "react";
import Option from "../option/option";
import styles from "./options.module.css";

function Options({ options, operation }) {
  return (
    <ul className={styles.options}>
      {operation.sort(options, "votes").map((option, index) => (
        <Option
          key={option.id}
          option={option}
          rank={index + 1}
          operation={operation}
        />
      ))}
    </ul>
  );
}

export default Options;
