const roomKeys = require("./keys");
const sectionTypes = require("./sectionTypes");

const page = {
  name: "Downstairs reception",
  quickTravel: true,  
  key: roomKeys.reception,
  sections: [
    {
      type: sectionTypes.text,
      content: `<h1>Out Of Hours - Escape Room</h1>
      <p>You and your investigation team arrive at the ${process.env.ESCAPE_ROOM_LOCATION}.</p>
      <p>You've been sent by the Commissioner to investigate a fraud case, whilst the coronavirus has cleared out the office, the skipper thought this would be a perfect time to sneak in and do some investigating! This case isn't strictly on the books so you shouldn't really be here... as such, you don't have any keys... you'll have to make your own way through the building and see if you can find any evidence.</p>
      <p>Don't worry, you and your team have your PPE and are all keeping 2 meters away from each other.</p>
      <p>You and your fellow detectives wait outside the building until a security guard walks outside. He doesn't wait for the door to shut before he walks away so you jump at the chance and sneak inside. You head into the main reception, looking to gather evidence as quickly as possible before your PPE deteriorates!</p>
      <p>The first thing you see is a post-it note on the desk which is pictured below. There's also a drawer in the reception desk which is locked with a 4-digit padlock.</p>
      <p>Around the corner is the elevator, but you need to put a staff pin in to activate it.</p>`,
    },
    {
      type: sectionTypes.image,
      label: "The Reception wall",
      source: "/img/reception-wall.png",
    },
    {
      type: sectionTypes.image,
      label: "The post it note",
      source: "/img/post-it-note.jpg",
    },
    {
      type: sectionTypes.options,
      label: "Where are you heading first?",
      items: [
        {
          label: "Try the lift",
          destination: roomKeys.receptionLift,
        },
        {
          label: "Try the desk drawer code",
          destination: roomKeys.receptionDrawer,
        },
      ],
    },
  ],
};

module.exports = page;
