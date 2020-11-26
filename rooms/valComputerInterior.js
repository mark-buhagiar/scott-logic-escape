const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Val's computer",
  quickTravel: true,
  key: roomKeys.valComputerInterior,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>You did it! You got onto the computer!</p>
      <p>The first thing that pops up is a map of Biggin Hill.... will this help you get into the stationary cupboard?</p>`
    },
    {
      type: sectionTypes.image,
      label: "What is the computer password?",
      source: "/img/biggin-hill-map.jpg"
    },
  ]
};

module.exports = room;
