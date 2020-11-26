const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name: "Finance department",
  quickTravel: true,
  key: roomKeys.financeDepartmentInterior,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>Nice one! That worked, you got into the finance dept!</p>
      <p>You head over to the closest desk which has the name "Valarie Kendall" written on it. There's a note on the desk about orders to check. </p>
      <p>You move the computer mouse, it's on but locked with a password. </p>
      <p>There's also a safe in the room, it's going to need an 8-digit code to get in.</p>`,
    },
    {
      type: sectionTypes.image,
      label: "Orders to check",
      source: "/img/orders-to-check.jpg",
    },
    {
      type: sectionTypes.options,
      label: "What's your next move?",
      items: [
        {
          label: "Try the Stationary Cupboard padlock code",
          destination: roomKeys.financeStationaryCupboard,
        },
        {
          label: "Try the computer password",
          destination: roomKeys.valComputer,
        },
        {
          label: "Look around",
          destination: roomKeys.financeDepartmentInteriorPart2,
        },
      ],
    },
  ],
};

module.exports = room;
