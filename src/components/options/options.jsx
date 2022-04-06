import React from "react";
import Option from "../option/option";
import styles from "./options.module.css";

function Options({ options, onVote }) {
  return (
    <ul className={styles.options}>
      {options.map((option, index) => (
        <Option
          key={option.id}
          option={option}
          rank={index + 1}
          onVote={onVote}
        />
      ))}
    </ul>
  );
}

export default Options;
