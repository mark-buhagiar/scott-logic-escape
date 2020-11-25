const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Reception drawer exterior",
  quickTravel: false,
  key: roomKeys.receptionDrawer,
  sections: [
    {
      type: sectionTypes.text,
      content: `So you need a 4-digit code to crack into the desk drawer, reckon you know it?`
    },    
    {
      type: sectionTypes.input,
      label: "What's the code to the padlock on the drawer?",
      puzzle: puzzleKeys.receptionDrawer,
      button: "Twist those digits",
    },
  ]
};

module.exports = room;
