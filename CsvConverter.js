const path = require("path")
const csvConv = require('./CsvToJson.js')
const fs = require('fs')

if(!process.argv[2]) {
    console.log("Pls enter a path to the csv file to convert")
    process.exit()
}

const jsonFilePath = path.join(__dirname, 'customer-data.json')
csvConv.csvToJson(process.argv[2], (err, json) => {
    if(err) console.log(err)

    fs.writeFileSync(jsonFilePath, json)                
})


