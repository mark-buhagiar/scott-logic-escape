const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/Keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Bar computer",
  quickTravel: false,
  key: roomKeys.barComputer,
  sections: [
    {
      type: sectionTypes.text,
      content: `So, you think you know the password, huh? Okay, crack on!`
    },
    {
      type: sectionTypes.input,
      label: "What is the computer password?",
      puzzle: puzzleKeys.barLogin,
      button: "Type it in",
    },
  ]
};

module.exports = room;
