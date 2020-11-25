import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

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
    try {
      localStorage.setItem("teamName", teamName);
      const url = `${process.env.REACT_APP_API_URL}/team-start`;
      await Axios.post(url, { teamName });
      history.push("/room/reception");
    } catch {
      alert(
        "There has been a bit of a whoopsie, kindly contact Laurence, Chris or Mark"
      );
    }
  };

  return (
    <div className="panel">
      <h1>Welcome to We Are London Dec 2020!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <div className="actions">
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <button onClick={start}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Start;