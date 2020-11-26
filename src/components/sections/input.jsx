import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

const InputSection = ({ label, puzzle, button }) => {
  const history = useHistory();
  const [value, setValue] = useState("");
  const [hint, setHint] = useState("");

  useEffect(() => {
    const cachedValue = localStorage.getItem(puzzle);
    if (!!cachedValue) setValue(cachedValue);
  }, [puzzle]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      submit();
    }
  };

  const submit = async () => {
    if (value.length === 0) return;
    localStorage.setItem(puzzle, value);

    const url = `${process.env.REACT_APP_API_URL}/submit-guess`;
    const response = await Axios.post(url, {
      teamName: localStorage.getItem("teamName"),
      puzzle,
      value,
    });

    if (response.data.success) {
      setHint("");
      history.push(response.data.destination);
    } else {
      setHint(response.data.hint);
    }
  };

  return (
    <>
      <label>{label}</label>
      <div className="input-group">
        {/* <input
          type="text"
          value={value}
          onKeyPress={handleKeyPress}
          onChange={(e) => setValue(e.target.value)}
        /> */}
        <TextField variant="filled" 
          value={value}
          onKeyPress={handleKeyPress}
          onChange={(e) => setValue(e.target.value)}/>

        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={submit}
        >
          {button}
        </Button>
      </div>
      <div className="hint">{hint}</div>
    </>
  );
};

export default InputSection;
