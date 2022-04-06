import React, { useCallback, useState } from "react";
import "./app.css";
import Options from "./components/options/options";
import OptionAddForm from "./components/optionAddForm/optionAddForm";
import Header from "./components/header/header";

const OPTIONS_KEY = "options";
const storedOptions = localStorage.getItem(OPTIONS_KEY);

function App({ operation }) {
  const [options, setOptions] = useState(
    storedOptions ? JSON.parse(storedOptions) : []
  ); // used for first rendering

  const handleAdd = useCallback((content) => {
    setOptions((options) => {
      const updatedOptions = [
        ...options,
        { id: Date.now(), content: content, votes: 0 },
      ];

      localStorage.setItem(OPTIONS_KEY, JSON.stringify(updatedOptions));
      return updatedOptions;
    });
  }, []);

  const handleVote = useCallback((option) => {
    setOptions((options) => {
      let updatedOptions = [...options];
      const index = updatedOptions.indexOf(option);
      updatedOptions[index] = { ...option, votes: option.votes + 1 };
      updatedOptions = operation.sort(updatedOptions, "votes");

      localStorage.setItem(OPTIONS_KEY, JSON.stringify(updatedOptions));
      return updatedOptions;
    });
  }, []);

  const handleDelete = useCallback((option) => {
    setOptions((options) => {
      const updatedOptions = options.filter((item) => item !== option);

      localStorage.setItem(OPTIONS_KEY, JSON.stringify(updatedOptions));
      return updatedOptions;
    });
  }, []);

  const handleReset = useCallback(() => {
    if (window.confirm("Are you sure to reset the app?")) {
      localStorage.setItem(OPTIONS_KEY, JSON.stringify([]));
      setOptions([]);
    }
  }, []);

  return (
    <>
      <Header optionsCount={options.length} onReset={handleReset} />
      {options.length ? (
        <Options
          options={options}
          onVote={handleVote}
          onDelete={handleDelete}
          operation={operation}
        />
      ) : null}
      <OptionAddForm onAdd={handleAdd} />
    </>
  );
}

export default App;
