var CalendarUtils = require('./lib/calendar_utils')
var moment = require('moment')

var title = "Maker Night!"
var startTime = moment().hours(20).minutes(0).seconds(0).milliseconds(0)
var endTime = moment().hours(21).minutes(0).seconds(0).milliseconds(0)

CalendarUtils.findEvent(title, startTime, endTime, (event) => {
  console.log(`Found a matching event!`)
})
