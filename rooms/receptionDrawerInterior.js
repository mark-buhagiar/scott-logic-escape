const roomKeys = require("./keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name: "Reception drawer",
  quickTravel: true,
  key: roomKeys.receptionDrawerInterior,
  sections: [
    {
      type: sectionTypes.text,
      content: `You did it! You got the drawer open, now to check out what's inside. There's a post-it note left by a security guard, a list of security shift patterns, a report on an employee and a crude map of the area.`,
    },
    {
      type: sectionTypes.options,
      label: "What are you checking first?",
      items: [
        {
          label: "The post-it note",
          destination: roomKeys.receptionDrawerPostit,
        },
        {
          label: "The map",
          destination: roomKeys.receptionDrawerMap,
        },
        {
          label: "The security sheet",
          destination: roomKeys.receptionDrawerSecuritySheet,
        },
        {
          label: "The employee report",
          destination: roomKeys.receptionDrawerEmployeeReport,
        },
      ],
    },
  ],
};

module.exports = room;
