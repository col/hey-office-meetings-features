var google = require('googleapis')
var googleAuth = require('google-auth-library')
var moment = require('moment')

var clientId = process.env.GOOGLE_CLIENT_ID
var clientSecret = process.env.GOOGLE_CLIENT_SECRET
var redirectUrl = process.env.GOOGLE_REDIRECT_URL
var accessToken = process.env.GOOGLE_ACCESS_TOKEN
var refreshToken = process.env.GOOGLE_REFRESH_TOKEN
var expiryDate = process.env.GOOGLE_EXPIRY_DATE

function getAuthClient() {
  var auth = new googleAuth()
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl)
  oauth2Client.setCredentials({
    access_token: accessToken,
    refresh_token: refreshToken,
    expiry_date: expiryDate
  })
  return oauth2Client
}

module.exports = {
  findEvent: (title, startTime, endTime, callback) => {
    var calendar = google.calendar('v3')
    calendar.events.list({
      auth: getAuthClient(),
      calendarId: 'primary',
      timeMin: endTime.subtract(1, 'seconds').format(),
      timeMax: endTime.add(1, 'seconds').format(),
      maxResults: 3,
      singleEvents: true,
      orderBy: 'startTime'
    }, function(err, response) {
      if (err) {
        console.log('The API returned an error: ' + err)
        return
      }
      var events = response.items
      var event = events.find((event) => {
        return event.summary == title && moment(event.start.dateTime).isSame(startTime)
      })
      callback(event)
    })
  }
}
