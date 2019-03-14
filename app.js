const chalk= require('chalk')
const geocode = require('./local-modules/geocode');
const forecast = require('./local-modules/forecast');


const address = process.argv[2]

geocode(address, (error, { latitude, longitude, location }) => {
    if (address === undefined) {
        return console.log('No location is provided')
    } else {
        if(error) {
            return console.log(error)
        }
        
        // const { latitude, longitude, location } = geoData;

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(chalk.blue.inverse(location))
            console.log(chalk.blue(forecastData))
        })
    }
    
})


