import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStamp, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./option.module.css";

function Option({ option, rank, onVote, onDelete, operation }) {
  const handleClick = () => onVote(option);
  const handleDelete = () => onDelete(option);

  return (
    <li className={styles.option}>
      <span className={styles.rank}>{operation.getTrophyOrNot(rank)}</span>
      <p className={styles.content}>{option.content}</p>
      <p className={styles.votes}>
        <span className={styles.count}>{option.votes}</span> votes
      </p>

      <button className={styles.voteBtn} onClick={handleClick}>
        <FontAwesomeIcon icon={faStamp} />
      </button>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </button>
    </li>
  );
}

export default memo(Option);
