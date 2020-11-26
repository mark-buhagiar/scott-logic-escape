const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name: "Finance department",
  quickTravel: false,
  key: roomKeys.financeDepartmentInteriorPart2,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>So you're back in the main office and you're certain there's some evidence under one of these seats, but there isn't time to search them all, which are you going to search?</p>  
      <p>Which seat are you going to inspect?</p>`,
    },
    {
      type: sectionTypes.input,
      label: "Which seat are you checking?",
      puzzle: puzzleKeys.financeSeatNumber,
      button: "Run to that seat",
    },
  ],
};

module.exports = room;
