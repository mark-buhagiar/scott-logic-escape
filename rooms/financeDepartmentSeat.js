const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name: "Rucksack",
  quickTravel: true,
  key: roomKeys.financeDepartmentSeat,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>You look under the seat and find a rucksack with some weird items in it. A post-it note, and half a map... you now have everything you need to crack the safe in the Finance department as this surely will have evidence of fraud ... but which clues are you going to use?</p>`,
    },
    {
      type: sectionTypes.image,
      label: "Map part 2",
      source: "/img/rucksack-map-part.png"
    },
    {
      type: sectionTypes.image,
      label: "Grid 1",
      source: "/img/grid-1.png"
    },
    {
      type: sectionTypes.input,
      label: "Which clues do you need to combine to get the safe code?",
      puzzle: puzzleKeys.financeRequiredClues,
      button: "Piece it together",
    }
  ],
};

module.exports = room;
