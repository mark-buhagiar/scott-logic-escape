import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

import Section from "../sections";

const Room = () => {
  const [sections, setSections] = useState([]);
  const { roomId } = useParams();

  useEffect(() => {
    async function doWork() {
      const url = `${process.env.REACT_APP_API_URL}/room-details/${roomId}`;

      try {
        const response = await Axios.get(url);
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
            window.dispatchEvent( new Event('storage') );
          }
        }

        setSections(data.sections);
      } catch {
        alert(
          "There has been a bit of a whoopsie, kindly contact Laurence, Chris or Mark"
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
