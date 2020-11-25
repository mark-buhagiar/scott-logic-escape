var md5 = require("MD5");

const pageKeys = {
  reception: "reception",
  receptionDrawer: md5("receptionDrawer"),
  receptionDrawerInterior: md5("receptionDrawerInterior"),
  receptionDrawerPostit: md5("receptionDrawerPostit"),
  receptionDrawerMap: md5("receptionDrawerMap"),
  receptionDrawerSecuritySheet: md5("receptionDrawerSecuritySheet"),
  receptionDrawerEmployeeReport: md5("receptionDrawerEmployeeReport"),
  receptionLift: md5("receptionLift"),
  outsideAccounts: md5("outsideAccounts"),
  financeDepartment: md5("financeDepartment"),
  staffBar: md5("staffBar"),
  ceoOffice: md5("ceoOffice"),
  ceoOfficeInterior: md5("ceoOfficeInterior"),
  ceoSafe: md5("ceoSafe"),
  ceoDestinationSolved: md5("ceoDestinationSolved"),
  staffBarInterior: md5("staffBarInterior"),
  barComputer: md5("barComputer"),
  barSafe: md5("barSafe"),  
  barComputerInterior: md5("barComputerInterior"),
  barComputerInteriorPart2: md5("barComputerInteriorPart2"),
  barSafeInterior: md5("barSafeInterior"),
};

module.exports = pageKeys;
