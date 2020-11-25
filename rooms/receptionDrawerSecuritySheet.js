const roomKeys = require("./keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name: "Reception drawer security sheet",
  quickTravel: false,
  key: roomKeys.receptionDrawerSecuritySheet,
  sections: [
    {
      type: sectionTypes.text,
      content: `It's just a list of security shift patterns... clearly not the best security guards as you and your team are stood in reception without permission. This could come in handy later.`,
    },
    {
      type: sectionTypes.image,
      label: "Security shifts",
      source: "/img/security-shifts.png"
    },
  ],
};

module.exports = room;
