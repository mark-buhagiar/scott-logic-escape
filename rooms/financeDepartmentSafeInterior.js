const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Finance department safe",
  quickTravel: false,
  key: roomKeys.financeDepartmentSafeInterior,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>You did it! You cracked the safe! Inside you find the company's finance records, packed full of every dodgy dealing that Mr Hunt has been involved in!</p>
      <p>You also find a key to the Fire Exit this could be useful to make a quick exit, where do you head next?</p>`
    },
    {
      type: sectionTypes.image,
      label: "Financial records",
      source: "/img/financial-records.jpeg"
    },
    {
      type: sectionTypes.image,
      label: "Fire exit key",
      source: "/img/fire-exit-key.jpeg"
    },
    {
      type: sectionTypes.options,
      label: "Maybe you should bugger off now!",
      items: [
        {
          label: "Exit the building",
          destination: roomKeys.exit,
        }        
      ],
    },
  ]
};

module.exports = room;
