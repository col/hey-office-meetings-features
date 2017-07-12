var CalendarUtils = require('./lib/calendar_utils')
var moment = require('moment')

var title = "Maker Night!"
var startTime = moment().hours(20).minutes(0).seconds(0).milliseconds(0)
var endTime = moment().hours(21).minutes(0).seconds(0).milliseconds(0)
var room = "charris@thoughtworks.com"

CalendarUtils.findEvent(title, startTime, endTime, room, (event) => {
  if (event) {
    console.log(`Found a matching event!`)
    console.log("Title:", event.summary)
    console.log("Starting at:", event.start.dateTime)
    console.log("Ending at:", event.end.dateTime)
    console.log("Attendees:", event.attendees.map((attendee) => {
      return attendee.email
    }))
  } else {
    console.log(`Epic FAIL!`)
  }
})
