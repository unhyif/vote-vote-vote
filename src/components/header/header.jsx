import React, { memo } from "react";
import styles from "./header.module.css";

function Header({ optionsCount, onReset }) {
  return (
    <header>
      <h1 className={styles.title}>Vote vote vote!</h1>
      <div className={styles.container}>
        <p className={styles.desc}>
          There {optionsCount > 1 ? "are" : "is"}
          <span className={styles.count}> {optionsCount} </span>
          {optionsCount > 1 ? "options " : "option "}
          to vote for.
        </p>
        <button className={styles.resetBtn} onClick={onReset}>
          Reset
        </button>
      </div>
    </header>
  );
}

export default memo(Header);
