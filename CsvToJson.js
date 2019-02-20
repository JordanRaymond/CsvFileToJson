const fs = require('fs')
const path = require('path')
 
module.exports.csvToJson = function fromPath(path, callBack) {
    fs.readFile(path, "utf8", (err, data) => {
        if(err) callBack(err)

        data = data.split("\n")
        this.headers = data[0].split(',')
        let lines = []
        for(let i = 1; i < data.length-1; i++) {
            const info = data[i].split(',')
            let jsObj = {}

            for(let j=0; j < this.headers.length; j++) {
                jsObj[this.headers[j]] = info[j]
            }

            lines.push(jsObj)
        }

        callBack(null, JSON.stringify(lines))            
    })
}