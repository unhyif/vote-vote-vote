import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStamp } from "@fortawesome/free-solid-svg-icons";
import styles from "./option.module.css";

function Option({ option, rank, onVote }) {
  const handleClick = () => onVote(option);

  return (
    <li className={styles.option}>
      <span className={styles.rank}>{rank}</span>
      <p className={styles.content}>{option.content}</p>
      <span className={styles.count}>{option.count}</span>
      <button className={styles.voteBtn} onClick={handleClick}>
        <FontAwesomeIcon icon={faStamp} />
      </button>
    </li>
  );
}

export default memo(Option);
