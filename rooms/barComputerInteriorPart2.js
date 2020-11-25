const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/Keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Bar computer part 2",
  quickTravel: false,
  key: roomKeys.barComputerInteriorPart2,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>You did it! You're in the computer and on the desktop,  you see a folder marked "Top Secret". Do you open it? Of course, you open it!</p>
      <p>In that folder is some pictures, you click on it and it reveals the below.</p>`
    },
    {
      type: sectionTypes.image,
      label: "Clue",
      source: "/img/bar-computer-clue.png"
    },
    {
      type: sectionTypes.image,
      label: "Map part 1",
      source: "/img/bar-computer-map-part.png"
    },
  ]
};

module.exports = room;
