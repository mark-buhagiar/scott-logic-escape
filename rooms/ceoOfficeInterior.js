const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/Keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"CEO's office interior",
  quickTravel: true,
  key: roomKeys.ceoOfficeInterior,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>You did it! You broke into the CEO's office! If there's evidence of illegal behaviour, surely, it's here.</p>
      <p>The office seems pretty standard apart from the incredible view out of the 7th floor window and a massive map on the wall with pins in it.</p>
      <p>you fiddle with an ornament on the desk and suddenly, the map begins to move to the left, revealing a hidden safe behind it that needs a 4-digit code to open it. </p>
      <p>Before you can approach it, you spot a small leather diary sitting on a ledge outside the window blowing in the wind. It looks like it's been tossed out the window but it has got stuck. </p>
      <p>You decide to try and reach it through the window. It's too small to climb through but large enough to squeeze a hand through. you reach as far as you can, your arm waving on the other side of the window as you stretch out. </p>
      <p>As you reach out, the diary blows open in the wind. As the pages rise, a couple come within reach and you grasp at them. You retract your arm but as you do, the pages rip from the diary and you only manage to pull three pages in through the window as the rest of the diary drops to the street below.</p>
      <p>The three ripped pages read as below... pretty damning evidence. There's definitely more in that safe. A voice in your head says something about having enough evidence for a warrant.... but that's boring, you're going to carry on!</p>
      <p>Maybe these pages will help with the safe?</p>`
    },
    {
      type: sectionTypes.image,
      label:"Map",
      source: "/img/ceo-world-map.jpg"
    },
    {
      type: sectionTypes.image,
      label:"Diary 1",
      source: "/img/ceo-diary-1.jpg"
    },
    {
      type: sectionTypes.image,
      label:"Diary 2",
      source: "/img/ceo-diary-2.jpg"
    },
    {
      type: sectionTypes.image,
      label:"Diary 3",
      source: "/img/ceo-diary-3.jpg"
    },
    {
      type: sectionTypes.image,
      label:"Memo",
      source: "/img/memo.jpg"
    },
    {
      type: sectionTypes.input,
      label: "Think you can crack the safe? What's the 4 digit code?",
      puzzle: puzzleKeys.ceoHiddenSafe,
      button: "Beep them in",
    },
  ]
};

module.exports = room;
