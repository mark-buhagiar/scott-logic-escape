const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Reception lift",
  quickTravel: false,
  key: roomKeys.receptionLift,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>So you approach the lift and see a sign next to the keypad.</p>
      <p>It reads "Please input your 3-digit employee number plus your floor number to activate the lift."</p>`
    },    
    {
      type: sectionTypes.image,
      label: "The lift",
      source: "/img/lift.jpeg"
    },  
    {
      type: sectionTypes.input,
      label: "What 4-digit code are you going to try?",
      puzzle: puzzleKeys.liftAccessCode,
      button: "Call the lift",
    },
  ]
};

module.exports = room;
