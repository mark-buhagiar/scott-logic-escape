const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/Keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Bar computer",
  quickTravel: true,
  key: roomKeys.barComputerInterior,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>Nice work! You're in the computer and the first thing that pops up is these coloured dots with letters on like in the image below.</p>
      <p>A box then appears on the screen.</p>
      <p>"Hello Manager! Please enter the amount of profit we will be recording for today in £ Sterling. Remember Mr Hunt's rule!!"</p>
      <p>A box then appears for you to enter the days takings. What are you putting in?</p>`
    },
    {
      type: sectionTypes.image,
      label: "Coloured Alphabet",
      source: "/img/coloured-alphabet.png"
    },
    {
      type: sectionTypes.input,
      label: "What are the day's logged takings in £ Sterling?",
      puzzle: puzzleKeys.barIncome,
      button: "Moneeeeey",
    },
  ]
};

module.exports = room;
