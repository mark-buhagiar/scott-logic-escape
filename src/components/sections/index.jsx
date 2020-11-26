import React from "react";

import sectionTypes from "../../constants/sectionTypes";
import ImageSection from "./image";
import TextSection from "./text";
import InputSection from "./input";
import OptionsSection from "./options";
import Paper from "@material-ui/core/Paper";

import "./section.scss";

const Section = ({ section }) => {
  const generateSection = () => {
    switch (section.type) {
      case sectionTypes.image: {
        return <ImageSection {...section} />;
      }
      case sectionTypes.text: {
        return <TextSection {...section} />;
      }
      case sectionTypes.options: {
        return <OptionsSection {...section} />;
      }
      case sectionTypes.input: {
        return <InputSection {...section} />;
      }
      default:
        break;
    }
  };

  return (
    <Paper className="panel" elevation={3}>
      {generateSection()}
    </Paper>
  );
};

export default Section;
