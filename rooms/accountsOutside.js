const roomKeys = require("./keys");
const sectionTypes = require("./sectionTypes");

const page = {
  name: "Outside Accounts",
  quickTravel: true,  
  key: roomKeys.outsideAccounts,
  sections: [
    {
      type: sectionTypes.text,
      content: `<p>Bing! The doors open and you find yourself on the 7th floor. There is a seating plan of the area.</p> 
      <p>There are three signs that you can see ahead pointing to different parts of the office on this floor, where are you going first?</p>`,
    },
    {
      type: sectionTypes.image,
      label: "Seating plan",
      source: "/img/accounts-seating-plan.jpg",
    },
    {
      type: sectionTypes.options,
      label: "Which room are you heading to?",
      items: [
        {
          label: "Finance department",
          destination: roomKeys.financeDepartment,
        },
        {
          label: "Staff bar",
          destination: roomKeys.staffBar,
        },
        {
          label: "CEO's office",
          destination: roomKeys.ceoOffice,
        },
      ],
    },
  ],
};

module.exports = page;
