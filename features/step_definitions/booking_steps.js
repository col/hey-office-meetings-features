var {defineSupportCode} = require('cucumber')
var AWS = require('aws-sdk')
var expect = require('chai').expect

const Lex = new AWS.LexRuntime({
  apiVersion: '2016-11-28',
  signatureVersion: 'v4',
  region: 'us-east-1'
})

var botName = "HeyOffice"
var aliasName = "$LATEST"
var userId = "123456789"

function buildLexRequestParams(input) {
  return {
    botAlias: aliasName,
    botName: botName,
    inputText: input,
    userId: userId,
    sessionAttributes: {}
  };
}

var response = null;

defineSupportCode(function({Then, When}) {

    When(/^I say "([^"]*)"$/, function(input, callback) {
        console.log("I say:", input)
        var params = buildLexRequestParams(input)

        Lex.postText(params, function(err, data) {
          response = data.message
          callback()
        });
    })

    Then(/^I receive "([^"]*)"$/, function(output, callback) {
        console.log("I receive:", output)
        expect(response).to.equal(output)
        callback()
    })

})
