import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const QuickTravel = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    function updateDestinations() {
      console.log('testing')
      const quickTravelDestinations = JSON.parse(
        localStorage.getItem("quickTravelDestinations") || "[]"
      );
      console.log(quickTravelDestinations)
      setDestinations(quickTravelDestinations);
    }

    window.addEventListener("storage", updateDestinations);
    updateDestinations();
  }, []);

  const renderDestinations = () => {
    return (
      <div className="panel">
        <span>Quick Travel Links</span>
        {destinations.map(({ key, name }) => (
          <Link key={key} to={`/room/${key}`}>
            {name}
          </Link>
        ))}
      </div>
    );
  };

  return destinations.length > 0 ? renderDestinations() : <></>;
};

export default QuickTravel;
