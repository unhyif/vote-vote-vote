import React, { useReducer } from "react";
import "./app.css";
import Options from "./components/options/options";
import OptionAddForm from "./components/optionAddForm/optionAddForm";
import Header from "./components/header/header";

const OPTIONS_KEY = "options";

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const options = [...state, action.option];
      localStorage.setItem(OPTIONS_KEY, JSON.stringify(options));
      return options;
    }

    case "UPDATE": {
      const options = state.map((option) =>
        option.id === action.option.id ? action.option : option
      );
      localStorage.setItem(OPTIONS_KEY, JSON.stringify(options));
      return options;
    }

    case "DELETE": {
      const options = state.filter((option) => option !== action.option);
      localStorage.setItem(OPTIONS_KEY, JSON.stringify(options));
      return options;
    }

    case "RESET": {
      localStorage.clear();
      return [];
    }
  }
}

const storedOptions = localStorage.getItem(OPTIONS_KEY);
const initialState = storedOptions ? JSON.parse(storedOptions) : [];

function App({ operation }) {
  const [options, dispatch] = useReducer(reducer, initialState);

  const handleAdd = (content) =>
    dispatch({ type: "ADD", option: { id: Date.now(), content, votes: 0 } });

  const handleVote = (option) =>
    dispatch({
      type: "UPDATE",
      option: { ...option, votes: option.votes + 1 },
    });

  const handleDelete = (option) =>
    dispatch({
      type: "DELETE",
      option,
    });

  const handleReset = () => dispatch({ type: "RESET" });

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
