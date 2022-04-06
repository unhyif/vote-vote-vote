import React, { useCallback, useState } from "react";
import "./app.css";
import Options from "./components/options/options";
import OptionAddForm from "./components/optionAddForm/optionAddForm";

const sortByValue = (arr, key) =>
  arr.sort((a, b) => {
    if (a[key] > b[key]) {
      return -1;
    }
    if (a[key] < b[key]) {
      return 1;
    }
    return 0;
  }); // TODO: Merge sort

const OPTIONS_KEY = "options";
const storedOptions = localStorage.getItem(OPTIONS_KEY);

function App() {
  const [options, setOptions] = useState(
    storedOptions ? JSON.parse(storedOptions) : []
  ); // used for first rendering

  const handleAdd = useCallback((content) => {
    setOptions((options) => {
      const updatedOptions = [
        ...options,
        { id: Date.now(), content: content, count: 0 },
      ];

      localStorage.setItem(OPTIONS_KEY, JSON.stringify(updatedOptions));
      return updatedOptions;
    });
  }, []);

  const handleVote = useCallback((option) => {
    setOptions((options) => {
      let updatedOptions = [...options];
      const index = updatedOptions.indexOf(option);
      updatedOptions[index] = { ...option, count: option.count + 1 };
      updatedOptions = sortByValue(updatedOptions, "count");

      localStorage.setItem(OPTIONS_KEY, JSON.stringify(updatedOptions));
      return updatedOptions;
    });
  }, []);

  return (
    <>
      <Options options={options} onVote={handleVote} />
      <OptionAddForm onAdd={handleAdd} />
    </>
  );
}

export default App;
