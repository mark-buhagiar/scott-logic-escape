const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/Keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Bar safe",
  quickTravel: false,
  key: roomKeys.barSafe,
  sections: [
    {
      type: sectionTypes.text,
      content: `So you think you're ready to crack the safe? Go ahead!`
    },
    {
      type: sectionTypes.input,
      label: "What is the 6-letter passcode to the safe",
      puzzle: puzzleKeys.barSafe,
      button: "Type it in",
    },
  ]
};

module.exports = room;
