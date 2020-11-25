import React from "react";

import sectionTypes from "../../constants/sectionTypes";
import ImageSection from "./image";
import TextSection from "./text";
import InputSection from "./input";
import OptionsSection from "./options";

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

  return <div className="panel">{generateSection()}</div>;
};

export default Section;
