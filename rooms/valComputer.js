const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Val's computer",
  quickTravel: false,
  key: roomKeys.valComputer,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>Okay, time to try some computer hacking!</p>
      <p>Think you know the password to get onto the computer?</p>`
    },
    {
      type: sectionTypes.input,
      label: "What is the computer password?",
      puzzle: puzzleKeys.valComputerPassword,
      button: "Type that bad boy in",
    },
  ]
};

module.exports = room;
