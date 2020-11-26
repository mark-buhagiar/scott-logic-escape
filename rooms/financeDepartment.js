const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Finance department",
  quickTravel: false,
  key: roomKeys.financeDepartment,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>You get to the finance department on the 7th floor, this place is huge and very empty - seems like everyone left in a bit of a rush and there's papers everywhere! </p>
      <p>There's a magnetically locked door leading to the department that is locked shut - there's a keypad to unlock it but it obviously needs a code. Looks like it's a 6-digit one. </p>
      <p>You peer through the window and all you can see is a tube map up on the wall. </p>
      <p>To view the tube map, open this link in a new tab <a href="https://tfl.gov.uk/maps/track/tube" target="blank">https://tfl.gov.uk/maps/track/tube</a></p>
      <p>Maybe you'll need clues from elsewhere to help you crack this one.</p>`
    },
    {
      type: sectionTypes.input,
      label: "What code will get you through the door?",
      puzzle: puzzleKeys.financeDoorCode,
      button: "Beep beep beep",
    },
  ]
};

module.exports = room;
