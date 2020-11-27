# Usage

This escape room is designed to run on Heroku, while at the same time interacting with logs on AZ App Insights.

[Sign up for Heroku](https://signup.heroku.com/)\
[Sing up for Azure](https://portal.azure.com/)

Free options are available for both.

Set up a dyno in Heroku, and an Application Insights Instance on AZ. Take note of the App Insights Instrument ID.
Create config values on the Heroku dyno as per the below:

```
REACT_APP_API_URL : https://XXXXXXXXXXXXXXXX.herokuapp.com
REACT_APP_CONTACT_PERSON : John Doe
REACT_APP_EVENT_TITLE : WELCOME TO MY EVENT
REACT_APP_PAGE_TITLE : Page title
EXIT_MASTERMINDS_IMAGE_URL : https://XXXXXXXXXXX.XXX/XXXX/XXXX/XXXX/XXX.{jpg/png/etc.}
ESCAPE_ROOM_LOCATION : Contoso Ltd offices on the moon
FAVICON_URL : https://www.XXXXXXXXX.XXX/XXX/favicon.ico
APPINSIGHTS_INSTRUMENTATIONKEY : XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXX
```

Deploy the application (black box for the sake of this README).

The dyno should now successfully build a production version of the app and deploy it. Visit the url to test.

# Log browsing

The application create a number of custom AZ Log events.

## Models

- "Submit guess": When a team submits a guess at a specific puzzle;
- "Room visit": When a team visits a particular room;
- "Start": When a team starts playing;
- "Exit": When a team successfully exits the escape room, essentially 'winning';

### Submit guess
- teamName: string;
- puzzle: string;
- value: string;
- correct: boolean;

### Room visit
- teamName: string;
- roomId: string;
- visitTimeMs: long; (event time since epoch in Ms)
- visitTime: string; (ISO string of visit time)

### Start
- teamName: string;
- startTimeMs: long; (event time since epoch in Ms)
- startTime: string; (ISO string of visit time)

### Exit
- teamName: string;
- exitTimeMs: long; (event time since epoch in Ms)
- exitTime: string; (ISO string of visit time)

## Sample queries

Get all entries for a specific team in order of time descending (most recent first)
```
customEvents
| where customDimensions.teamName == "Test"
| order by timestamp desc
```

Get events of a particular type for a specific team
```
customEvents
| where customDimensions.teamName == "Test"
    and name == "Start"
| order by timestamp desc
```

Get events of multiple types for a specific team
```
customEvents
| where customDimensions.teamName == "Test"
    and name in ("Start", "Exit")
| order by timestamp desc
```

View only select properties from the retrieved logs
```
customEvents
| where customDimensions.teamName == "Test"
    and name in ("Start", "Exit")
| order by timestamp desc
| project customDimensions.teamName, customDimensions.startTimeMs, customDimensions.startTime, customDimensions.exitTimeMs, customDimensions.exitTime
```