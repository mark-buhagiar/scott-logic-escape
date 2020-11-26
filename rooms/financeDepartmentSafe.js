const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Finance department safe",
  quickTravel: true,
  key: roomKeys.financeDepartmentSafe,
  sections: [
    {
      type: sectionTypes.text,
      content: `Correct! these are the items you need! Below you can see what it looks like when all of the clues are placed together! The map parts join up and the number grid sits on top to complete the world map. Using other clues that you have found in the office; can you crack the final safe code?</p>`
    },
    {
      type: sectionTypes.image,
      label: "Completed map",
      source: "/img/map-complete.png"
    },
    {
      type: sectionTypes.input,
      label: "What is the safe combination?",
      puzzle: puzzleKeys.financeSafeCode,
      button: "Twist the old timey dial",
    },
  ]
};

module.exports = room;
