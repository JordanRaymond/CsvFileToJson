const csvConv = require('./CsvToJson.js')
const path = './customer-data.csv'
const fs = require('fs')

if(!process.argv[2]) {
    console.log("Pls enter a path to the csv file")
    process.exit()
}

csvConv.csvToJson(process.argv[2], (err, json) => {
    if(err) console.log(err)

    fs.writeFileSync('./customer-data.json', json)                
})


