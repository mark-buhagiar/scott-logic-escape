import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

const QuickTravel = () => {
  const [destinations, setDestinations] = useState([]);

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
      <Paper className="panel" elevation={1}>
        <h3>Quick Travel Links</h3>
        {destinations.map(({ key, name }) => (
          <Link key={key} to={`/room/${key}`}>
            {name}
          </Link>
        ))}
      </Paper>
    );
  };

  return destinations.length > 0 ? renderDestinations() : <></>;
};

export default QuickTravel;
