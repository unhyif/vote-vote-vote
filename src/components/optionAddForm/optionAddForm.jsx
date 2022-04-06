import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./optionAddForm.module.css";

function OptionAddForm({ onAdd }) {
  const input = React.createRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input.current.value);
    e.target.reset();
  };

  return (
    <form className={styles.addForm} onSubmit={handleSubmit}>
      <input
        ref={input}
        className={styles.addInput}
        placeholder="Add a new option!"
        required
      />
      <button className={styles.addBtn}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}

export default memo(OptionAddForm);
