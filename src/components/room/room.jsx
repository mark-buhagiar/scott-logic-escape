import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

import Section from "../sections";

const Room = () => {
  const [sections, setSections] = useState([]);
  const { roomId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [roomId, sections]);

  useEffect(() => {
    async function doWork() {
      let config = {
        headers: {
          "x-team-name": localStorage.getItem("teamName"),
        },
      };
      const url = `${process.env.REACT_APP_API_URL}/room-details/${roomId}`;

      try {
        const response = await Axios.get(url, config);
        const data = response.data;

        if (data.quickTravel) {
          const destinations = JSON.parse(
            localStorage.getItem("quickTravelDestinations") || "[]"
          );

          if (!destinations.find((x) => x.key === data.key)) {
            destinations.push({ key: data.key, name: data.name });
            localStorage.setItem(
              "quickTravelDestinations",
              JSON.stringify(destinations)
            );

            // A hack for all mankind
            window.dispatchEvent(new Event("storage"));
          }
        }
        window.scrollTo(0, 0);

        setSections(data.sections);
      } catch {
        alert(
          "There has been a bit of a whoopsie, kindly contact Laurence, James D, Chris or Mark B"
        );
      }
    }

    doWork();
  }, [roomId]);

  return (
    <>
      {sections.map((section, idx) => (
        <Section section={section} key={idx} />
      ))}
    </>
  );
};

export default Room;
