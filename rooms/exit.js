const roomKeys = require("./keys");
const sectionTypes = require("./sectionTypes");

const page = {
  name: "Exit",
  quickTravel: false,  
  key: roomKeys.exit,
  sections: [
    {
      type: sectionTypes.text,
      content: `<h1>You're out!</h1>
      <p>~ some months later ~</p>
      <p>Unfortunately, not everything unfolded as you had originally expected. All evidence was retrieved without a warrant, making it totally inadmissible in the courts. Now alerted to the presence of the fuzz, the masterminds of the operation moved all their money to Swiss bank accounts and left for the Bahamas.</p>`,
    },
    {
      type: sectionTypes.image,
      label: "Masterminds relaxing",
      source: "/img/masterminds.png"
    }
  ],
};

module.exports = page;
