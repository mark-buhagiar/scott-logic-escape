import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import "./quickTravel.scss";

const QuickTravel = () => {
  const [destinations, setDestinations] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    function updateDestinations() {
      const quickTravelDestinations = JSON.parse(
        localStorage.getItem("quickTravelDestinations") || "[]"
      );
      setDestinations(quickTravelDestinations);
    }

    window.addEventListener("storage", updateDestinations);
    updateDestinations();
  }, []);

  const renderDestinations = () => {
    return (
      <Paper id="Quick-Travel" className="panel" elevation={0}>
        <div className="title">
          <h3>Quick Travel Links</h3>
          <ArrowForwardIosIcon
            className="clickable"
            onClick={() => setCollapsed(true)}
          />
        </div>
        <ul>
          {destinations.map(({ key, name }) => (
            <li key={key}>
              <Link to={`/room/${key}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </Paper>
    );
  };

  const renderCollapsed = () => {
    return (
      <Paper id="Quick-Travel" className="panel collapsed" elevation={0}>
        <ArrowBackIosIcon
          className="clickable"
          onClick={() => setCollapsed(false)}
        />
      </Paper>
    );
  };

  return destinations.length > 0 ? (
    collapsed ? (
      renderCollapsed()
    ) : (
      renderDestinations()
    )
  ) : (
    <></>
  );
};

export default QuickTravel;
