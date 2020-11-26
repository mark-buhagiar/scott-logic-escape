const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Stationary cupboard",
  quickTravel: true,
  key: roomKeys.financeStationaryCupboard,
  sections: [
    {
      type: sectionTypes.text,
      content: `So, you think you've got the code to get into the stationary cupboard do you? Confident? Okay, give it a go!`
    },
    {
      type: sectionTypes.input,
      label: "What is the Stationary Cupboard Code?",
      puzzle: puzzleKeys.financeCupboard,
      button: "Struggle with the combination lock",
    },
  ]
};

module.exports = room;
