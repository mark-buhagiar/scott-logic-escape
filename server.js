if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

let appInsights = require("applicationinsights");
appInsights
  .setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY)
  .setSendLiveMetrics(true)
  .start();
let client = appInsights.defaultClient;

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rooms = require("./rooms");
const puzzles = require("./puzzles");
const roomKeys = require("./rooms/keys");
const eventTypes = require("./constants/eventTypes");
const headers = require("./constants/headers");

var app = express();

if (process.env.NODE_ENV !== "production") {
  var cors = require("cors");
  app.use(cors());
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));

// For ease of development, expose the public dir as well when the node env is not production.
if (process.env.NODE_ENV !== "production") {
  app.use(express.static(path.join(__dirname, "public")));
}

function logSubmitGuess(teamName, puzzle, value, correct) {
  client.trackEvent({
    name: eventTypes.submitGuess,
    properties: { teamName, puzzle, value, correct },
  });
}

function logGreviousError(error) {
  client.trackException({ exception: new Error(error) });
}

app.post("/submit-guess", function (req, res, next) {
  const puzzle = puzzles.find((x) => x.key === req.body.puzzle);
  if (!puzzle) {
    logGreviousError(
      `Team ${req.body.teamName} tried to answer puzzle ${req.body.puzzle} with value ${req.body.value}`
    );
    return res.status(500);
  }

  logSubmitGuess(
    req.body.teamName,
    req.body.puzzle,
    req.body.value,
    puzzle.value === req.body.value
  );

  if (puzzle.value === req.body.value) {
    return res.send({ success: true, destination: puzzle.destination });
  } else {
    return res.send({ success: false, hint: puzzle.hint });
  }
});

function checkForExitRoom(teamName, currDate, roomId){
  if (roomId === roomKeys.exit){    
    client.trackEvent({
      name: eventTypes.exit,
      properties: { teamName, exitTimeMs: currDate.getTime(), exitTime: currDate.toISOString() },
    });
  }
}

app.get("/room-details/:roomId", function (req, res) {
  const roomId = req.params.roomId;
  const room = rooms.find((x) => x.key === roomId);
  const teamName = req.headers[headers.teamName];
  const currDate = new Date();

  client.trackEvent({
    name: eventTypes.room,
    properties: { teamName, roomId, visitTimeMs: currDate.getTime(), visitTime: currDate.toISOString() },
  });

  checkForExitRoom(teamName, currDate, roomId);

  if (!!room) return res.send(room);

  return res.status(400).send("Invalid room ID. 👻");
});

app.post("/team-start", function (req, res) {  
  const currDate = new Date();
  client.trackEvent({
    name: eventTypes.start,
    properties: { teamName: req.body.teamName, startTimeMs: currDate.getTime(), startTime: currDate.toISOString() },
  });
  return res.status(200).send();
});

app.get("/favicon.ico", function (req, res) {
  console.log('eere')
  return res.redirect(process.env.FAVICON_URL);
});

app.get("*", function (req, res) {
  return res.sendFile(path.join(__dirname, "build", "index.html"));
});

var port = process.env.PORT || "8080";
app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
