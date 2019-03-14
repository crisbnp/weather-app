const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const weatherURL = "https://api.darksky.net/forecast/86720df2dbab93502b0a4a41b98e687e/" + latitude +  "," + longitude + "?units=si"

    request({url: weatherURL, json: true}, (error, response) => {
        if (error) {
            callback("Can't connect to weather service!", undefined)
        } else if (response.body.error) {
            callback("Can't find location", undefined)
        } else {
             callback(undefined, `Location: ${response.body.timezone},\nSummary: ${response.body.daily.data[0].summary},\nTemperature: ${response.body.currently.temperature} °C,\nChanceOfrain: ${response.body.currently.precipProbability} %`
            )
        }
    })

}
// `location: ${response.body.timezone},\nsummary: ${response.body.daily.data[0].summary},\ntemperature: ${response.body.currently.temperature} °C,\nchanceOfrain: ${response.body.currently.precipProbability} %`

module.exports = forecast

// const url='https://api.darksky.net/forecast/86720df2dbab93502b0a4a41b98e687e/37.8267,-122.4233?units=si'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         //low level errors - connectivity issue
//         console.log("Error. Unable to connect to weather service!")
//     } else if (response.body.error) {
//         //input error
//         console.log('Unable to find location.')
//     } else {
//         let msg = response.body.daily.data[0].summary + 'It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + ' % chance of rain.'
//         console.log(msg)
//     }
// })
