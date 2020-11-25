const roomKeys = require("./keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name: "Reception drawer map",
  quickTravel: false,
  key: roomKeys.receptionDrawerMap,
  sections: [
    {
      type: sectionTypes.text,
      content: `Not the most impressive looking map in the world.... it doesn't seem to have a code to get you in the elevator but it may come in handy later.`,
    },
    {
      type: sectionTypes.image,
      label: "Map",
      source: "/img/city-map.png"
    },
  ],
};

module.exports = room;
