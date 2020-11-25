const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/Keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"Staff bar exterior",
  quickTravel: true,
  key: roomKeys.staffBar,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>Because every problem can be solved at the bar, right? People are going to start to think you've got a problem!</p>
      <p>You're making good time as you head down the corridor, it's only been 5 minutes since you got in.</p>
      <p>You reach the door of the bar and find it locked. Above the door is a clock but the hands have fallen off. There is a wire running from the clock to the door, they're connected... maybe if you set the time correctly, the door will unlock? But what time is it?</p>`
    },
    {
      type: sectionTypes.input,
      label: "So, you think you know what time it is then? Okay, give it a go!",
      puzzle: puzzleKeys.barClock,
      button: "Set the time",
    },
  ]
};

module.exports = room;
