const puzzleKeys = require("./keys");
const roomKeys = require("../rooms/keys");

const puzzles = [
  {
    key: puzzleKeys.receptionDrawer,
    value: "1437",
    hint: "Nope! Try something yellow and sticky",
    destination: roomKeys.receptionDrawerInterior,
  },
  {
    key: puzzleKeys.liftAccessCode,
    value: "1117",
    hint: "That code didn't work! Look at that employee report to work this out.",
    destination: roomKeys.outsideAccounts,
  },
  {
    key: puzzleKeys.ceoOfficeDoor,
    value: "right, left, left, left",
    hint: "Hmmmm, maybe you need to step into Val's shoes and take a walk. Put a comma and space between each command and all lowercase.",
    destination: roomKeys.ceoOfficeInterior
  },
  {
    key: puzzleKeys.ceoHiddenSafe,
    value: "2571",
    hint: "Nope! Check those diary pages again!",
    destination: roomKeys.ceoSafe
  },
  {
    key: puzzleKeys.ceoDestination,
    value: "Amsterdam",
    hint: "Nope! Does anything from the safe give you a clue as to where to look on that map in the office?",
    destination: roomKeys.ceoDestinationSolved,
  },
  {
    key: puzzleKeys.barClock,
    value: "10:55",
    hint: "Nope! Time should be twelve hour format - X:XX",
    destination: roomKeys.staffBarInterior,
  },
  {
    key: puzzleKeys.barLogin,
    value: "1697",
    hint:"Wrong! Try again, maybe the clue is somewhere in building?",
    destination: roomKeys.barComputerInterior
  },
  {
    key: puzzleKeys.barSafe,
    value: "TTMETE",
    hint: "Nope! Try looking at the colour sheet and the cocktail menu",
    destination: roomKeys.barSafeInterior
  },
  {
    key: puzzleKeys.barIncome,
    value: "140",
    hint: "Nope! Have you added everything up right? Remember the CEO's rule!",
    destination: roomKeys.barComputerInteriorPart2
  },
  {
    key: puzzleKeys.financeDoorCode,
    value: "112324",
  },
  {
    key: puzzleKeys.valComputerPassword,
    value: "2416",
  },
  {
    key: puzzleKeys.financeCupboard,
    value: "2872",
  },
  {
    key: puzzleKeys.financeSeatNumber,
    value: "F6",
  },
  {
    key: puzzleKeys.financeRequiredClues,
    value: "map part 1, map part 2, grid 1, grid 2",
  },
  {
    key: puzzleKeys.financeSafeCode,
    value: "08209175",
  },
];

module.exports = puzzles;
