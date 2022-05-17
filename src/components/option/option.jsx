import React, { memo, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStamp, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./option.module.css";

function Option({ option, rank, onVote, onDelete, operation }) {
  const liRef = useRef();
  const handleClick = () => onVote(option);
  const handleDelete = () => {
    liRef.current.style.opacity = 0;
    setTimeout(() => onDelete(option), 500);
  };

  return (
    <li ref={liRef} className={styles.option}>
      <span className={styles.rank}>{operation.getMedalOrNot(rank)}</span>
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
