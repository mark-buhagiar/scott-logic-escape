import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import "./start.scss";
import Axios from "axios";

const Start = () => {
  const [teamName, setTeamName] = useState("");
  const [buttonText, setButtonText] = useState("START!");
  const history = useHistory();

  useEffect(() => {
    const cachedValue = localStorage.getItem("teamName");
    if (!!cachedValue) {
      setTeamName(cachedValue);
      setButtonText("Continue");
    }
  }, []);

  const start = async () => {
    if (teamName.length === 0) return;
    try {
      localStorage.setItem("teamName", teamName);
      const url = `${process.env.REACT_APP_API_URL}/team-start`;
      await Axios.post(url, { teamName });
      history.push("/room/reception");
    } catch {
      alert(
        "There has been a bit of a whoopsie, kindly contact Laurence, James D, Chris or Mark B"
      );
    }
  };

  return (
    <Paper className="panel">
      <h1>Welcome to We Are London Dec 2020!</h1>
      <p>Instructions:</p>
      <p>
        <ul>
          <li>
            The leader of each team should share his screen to allow everyone to
            follow along.
          </li>
          <li>
            Your time will start as soon as you click the start button below.
          </li>
          <li>
            It's probably a good idea to save images as you come across them.
            This will save you time down the line.
          </li>
          <li>
            Make sure you get to the very end for your final time to be
            recorded. Trust me, you'll know when you're on the final screen.
          </li>
          <li>Progress is saved as you progress.</li>
          <li>Each team is allowed 3 hints.</li>
          <li>
            If you run into any issues or would like to use a hint, please reach
            out to Laurence, James D, Chris or Mark B.
          </li>
        </ul>
      </p>
      <p>
        Note: Please keep in mind that in line will all code that has been
        developed late at night and rushed to production, there has been no
        formal testing, and some sort of vulnerabilities might be present.
        Please, don't cheat, and if you do...👏
      </p>
      <div className="input-group">
        <TextField
          variant="filled"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={start}
        >
          {buttonText}
        </Button>
      </div>
    </Paper>
  );
};

export default Start;
