const roomKeys = require("./keys");
const sectionTypes = require("./sectionTypes");

const page = {
  name: "Staff bar interior",
  quickTravel: true,  
  key: roomKeys.staffBarInterior,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>You did it! You set the time correctly and unlocked the door, you head inside, with no one in the bar the bottles of gin are looking very tempting.</p>
      <p>You notice a cocktail menu sitting on the bar ... resist serving yourself a drink if you can. Maybe just save the picture.</p> 
      <p>Behind the bar, there's a computer that's locked at the login screen - it needs a password.</p> 
      <p>You make your way to the back room where you find a safe that needs a 6-letter combination to open.</p> 
      <p>What do you do?</p>`,
    },
    {
      type: sectionTypes.image,
      label: "Cocktail Menu",
      source: "/img/cocktail.png",
    },
    {
      type: sectionTypes.options,
      label: "What next?",
      items: [
        {
          label: "Try the computer password",
          destination: roomKeys.barComputer,
        },
        {
          label: "Try the safe",
          destination: roomKeys.barSafe,
        },
      ],
    },
  ],
};

module.exports = page;
