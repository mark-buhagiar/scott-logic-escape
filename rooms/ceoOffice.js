const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/Keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"CEO's office exterior",
  quickTravel: true,
  key: roomKeys.ceoOffice,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>You make your way down the corridor, heading towards the CEO's office. Suddenly you reach a door that says:</p>
      <p>"Mr Michael Hunt - CEO"</p>
      <p>There's a padlock on the door, a directional lock, you'll need to enter a sequence of directions in the right order to open it.</p>`
    },
    {
      type: sectionTypes.image,
      label:"Directional Lock",
      source: "/img/directional-lock.png"
    },
    {
      type: sectionTypes.input,
      label: "So you reckon you know how to break into the CEO's Office ey!? What's the code?",
      puzzle: puzzleKeys.ceoOfficeDoor,
      button: "Flick that lock",
    },
  ]
};

module.exports = room;
