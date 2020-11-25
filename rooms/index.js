const reception = require("./reception");
const receptionDrawer = require("./receptionDrawer");
const receptionDrawerInterior = require("./receptionDrawerInterior");
const receptionDrawerEmployeeReport = require("./receptionDrawerEmployeeReport");
const receptionDrawerMap = require("./receptionDrawerMap");
const receptionDrawerPostit = require("./receptionDrawerPostit");
const receptionDrawerSecuritySheet = require("./receptionDrawerSecuritySheet");
const receptionLift = require("./receptionLift");
const accountsOutside = require("./accountsOutside");
const ceoOffice = require("./ceoOffice");
const ceoOfficeInterior = require("./ceoOfficeInterior");
const ceoSafe = require("./ceoSafe");
const ceoDestinationSolved = require("./ceoDestinationSolved");
const staffBar = require("./staffbar");
const staffBarInterior = require("./staffBarInterior");
const barComputer = require('./barComputer');
const barSafe = require('./barSafe');
const barComputerInterior = require('./barComputerInterior');
const barSafeInterior = require('./barSafeInterior');
const barComputerInteriorPart2 = require('./barComputerInteriorPart2');

const pages = [
  reception,
  receptionDrawer,
  receptionDrawerInterior,
  receptionDrawerInterior,
  receptionDrawerEmployeeReport,
  receptionDrawerMap,
  receptionDrawerPostit,
  receptionDrawerSecuritySheet,
  receptionLift,
  accountsOutside,
  ceoOffice,
  ceoOfficeInterior,
  ceoSafe,
  ceoDestinationSolved,
  staffBar,
  staffBarInterior,
  barComputer,
  barSafe,
  barComputerInterior,
  barSafeInterior,
  barComputerInteriorPart2,

];

module.exports = pages;
