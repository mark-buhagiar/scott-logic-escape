import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const InputSection = ({ label, puzzle, button }) => {
  const history = useHistory();
  const [value, setValue] = useState("");
  const [hint, setHint] = useState("");

  useEffect(() => {
    const cachedValue = localStorage.getItem(puzzle);
    if (!!cachedValue) setValue(cachedValue);
  }, [puzzle]);

  const submit = async () => {
    localStorage.setItem(puzzle, value);

    const url = `${process.env.REACT_APP_API_URL}/submit-guess`;
    const response = await Axios.post(url, {
      teamName: localStorage.getItem("teamName"),
      puzzle,
      value,
    });

    if (response.data.success) {
      history.push(response.data.destination);
    } else {
      setHint(response.data.hint);
    }
  };

  return (
    <>
      <label>{label}</label>
      <div className="input-group">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={submit}>{button}</button>
      </div>
      <div className="hint">{hint}</div>
    </>
  );
};

export default InputSection;
