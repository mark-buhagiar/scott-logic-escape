const roomKeys = require("./keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"CEO's destination solved",
  quickTravel: false,
  key: roomKeys.ceoDestinationSolved,
  sections: [
    {
      type: sectionTypes.text,
      content: `You did it! he's heading to Amsterdam... possibly! You may need all of those locations later so make note!`
    },
    {
      type: sectionTypes.options,
      label: "Where do you want to go next?",
      items: [
        {
          label: "7th floor lobby",
          destination: roomKeys.lobby7Floor,
        },
        {
          label: "The staff bar",
          destination: roomKeys.staffBar,
        },
      ],
    },
  ]
};

module.exports = room;
