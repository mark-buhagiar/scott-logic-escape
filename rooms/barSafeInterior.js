const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/Keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Bar safe",
  quickTravel: true,
  key: roomKeys.barSafeInterior,
  sections: [
    {
      type: sectionTypes.text,
      content: `You did it! You cracked the safe! But there's no money in there... just a receipt with orders on. Something doesn't seem right here... There are also some poker chips, separated by colour.`
    },
    {
      type: sectionTypes.image,
      label: "Inside the safe",
      source: "/img/income.png",
    },
    {
      type: sectionTypes.image,
      label: "Floor 7 chips - 1, Black",
      source: "/img/black-chips.png",
    },
    {
      type: sectionTypes.image,
      label: "Floor 7 chips - 2, Light Blue",
      source: "/img/light-blue-chips.png",
    },
    {
      type: sectionTypes.image,
      label: "Floor 7 Chips - 3, Red",
      source: "/img/red-chips.png",
    },
    {
      type: sectionTypes.image,
      label: "Tube note",
      source: "/img/tube-note.jpg",
    },
  ]
};

module.exports = room;
