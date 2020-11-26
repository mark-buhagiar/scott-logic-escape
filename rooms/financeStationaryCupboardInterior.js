const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Stationary cupboard",
  quickTravel: true,
  key: roomKeys.financeStationaryCupboardInterior,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>You did it! You got into the stationary cupboard!</p>
      <p>But it's a let-down... literally just stationary in here.</p>
      <p>There's a number chart on the wall.... maybe that could come in handy?</p>`
    },
    {
      type: sectionTypes.image,
      label: "Multiplication Table",
      source: "/img/multiplication-table.jpg"
    },
  ]
};

module.exports = room;
