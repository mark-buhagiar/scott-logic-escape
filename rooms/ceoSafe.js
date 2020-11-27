const roomKeys = require("./keys");
const puzzleKeys = require("../puzzles/keys");
const sectionTypes = require("./sectionTypes");

const room = {
  name:"CEO's safe",
  quickTravel: true,
  key: roomKeys.ceoSafe,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>You did it! You got into the safe! </p>
      <p>What a weird collection of items to find in a safe....</p>
      <p>A highlighted poem, an alphabetical list of tube stations and a CD labelled "Travel CD" and some boarding passes. There's also some post-it notes and a number grid. </p>
      <p>The songs on the CD are in the video's below.</p>`
    },
    {
      type: sectionTypes.text,
      content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/GZ06zfmFR4c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
      type: sectionTypes.text,
      content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Y4QGPWLY-EM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
      type: sectionTypes.text,
      content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/bYMfsUgbhN4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
      type: sectionTypes.text,
      content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/CPAC2SWvo6E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
      type: sectionTypes.image,
      label:"Poem",
      source: "/img/poem.png"
    },
    {
      type: sectionTypes.image,
      label:"Grid 2",
      source: "/img/grid-2.png"
    },
    {
      type: sectionTypes.image,
      label:"Boarding pass 1",
      source: "/img/boarding-pass-1.png"
    },
    {
      type: sectionTypes.image,
      label:"Boarding pass 2",
      source: "/img/boarding-pass-2.png"
    },
    {
      type: sectionTypes.image,
      label:"Boarding pass 3",
      source: "/img/boarding-pass-3.png"
    },
    {
      type: sectionTypes.image,
      label:"Boarding pass 4",
      source: "/img/boarding-pass-4.png"
    },
    {
      type: sectionTypes.image,
      label:"Tube list 1",
      source: "/img/tube-list-1.jpg"
    },
    {
      type: sectionTypes.image,
      label:"Tube list 2",
      source: "/img/tube-list-2.jpg"
    },
    {
      type: sectionTypes.image,
      label:"Val's PC password",
      source: "/img/val-pc-password.jpg"
    },
    {
      type: sectionTypes.image,
      label:"Bar password",
      source: "/img/bar-password.jpg"
    },
    {
      type: sectionTypes.input,
      label: "Which Capital City has been crossed out on Boarding Pass 1",
      puzzle: puzzleKeys.ceoDestination,
      button: "Kapaww",
    },
  ]
};

module.exports = room;
