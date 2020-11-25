const roomKeys = require("./keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name: "Reception drawer employee report",
  quickTravel: false,
  key: roomKeys.receptionDrawerEmployeeReport,
  sections: [
    {
      type: sectionTypes.text,
      content: `So it looks like this company spies on it's own staff... something tells you that this employee isn't getting a raving annual review. This could come in handy later too so SAVE THIS PICTURE.`,
    },
    {
      type: sectionTypes.image,
      label: "The employee report",
      source: "/img/employee-report.png"
    },
  ],
};

module.exports = room;
