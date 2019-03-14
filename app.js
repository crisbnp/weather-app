const chalk= require('chalk')
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const address = process.argv[2]

geocode(address, (error, geoData) => {
    if (address === undefined) {
        return console.log('No location is provided')
    } else {
        if(error) {
            return console.log(error)
        }
        
        forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(chalk.blue.inverse(geoData.location))
            console.log(chalk.blue(forecastData))
        })
    }
    
})


