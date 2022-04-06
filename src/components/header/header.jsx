import React, { memo } from "react";
import styles from "./header.module.css";

function Header({ optionsCount, onReset }) {
  return (
    <header>
      <h1 className={styles.title}>Vote vote vote!</h1>
      <div className={styles.container}>
        <p className={styles.desc}>
          There are <span className={styles.count}>{optionsCount}</span> options
          to vote for.
        </p>
        <button className={styles.reset} onClick={onReset}>
          Reset
        </button>
      </div>
    </header>
  );
}

export default memo(Header);
