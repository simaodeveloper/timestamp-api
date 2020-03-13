'use strict';

const express = require('express');
const app = express();

const cors = require('cors');

const ErrorResponse = require('./utils/ErrorResponse');

const { isInvalidDate } = require('./utils/Date');

const errorHandler = require('./middlewares/error');


// Middlewares
app.use(cors({ optionSuccessStatus: 200 }));

// Set how to handle JSON
app.use(express.json());

// Active static assets manager
app.use(express.static('public'));

const PORT = process.env.PORT || 24386;


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Routes


app.get('/api/timestamp/:date_string', function getTimeStampByDateString(req, res, next) {
  let reDateFormat = /\-/g;
  let { date_string: dateValue } = req.params;

  if (reDateFormat.test(dateValue)) {
    dateValue = dateValue.replace(reDateFormat, '/');
  } else {
    dateValue = parseInt(dateValue);
  }

  const date = new Date(dateValue);

  if (isInvalidDate(date)) {
    return next(
      new ErrorResponse(`Invalid Date`, 400)
    );
  }

  res
    .status(200)
    .json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
});

app.get('/api/timestamp', function getCurrentTimeStamp(req, res, next) {
  const date = new Date(Date.now());

  res
    .status(200)
    .json({
      unix: date.getTime(),
      utc: date.toUTCString()
    })
});

// Handle All Error
app.use(errorHandler);


const listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + PORT);
});
