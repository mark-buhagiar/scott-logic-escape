const roomKeys = require("./keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name: "Reception drawer security note",
  quickTravel: false,
  key: roomKeys.receptionDrawerSecuritySheet,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>Well it seems like you picked the right time to break and enter into this place! Better hurry out of the lobby before the next guy shows up!</p>
      <p>This may be important too.</p>`,
    },
    {
      type: sectionTypes.image,
      label: "Security Note",
      source: "/img/security-note.jpg"
    },
  ],
};

module.exports = room;
