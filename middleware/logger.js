const {v4:uuid} = require('uuid')
const {format} = require('date-fns')
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const EventLog = async(message,filename)=>{
    const dateTime = format(new Date () , 'yyyy dd MM \t HH:mm:ss')
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`
    try {
        if(!fs.existsSync(path.join(__dirname,'../logs'))){
            await fsPromises.mkdir(path.join(__dirname,'../logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'../logs',filename),logItem)
    } catch (error) {
        console.log(error);
    }
}


const logger = (req,res,next)=>{
    EventLog(`${req.method}\t${req.url}\t${req.headers.origin}`,'reqLogs.log')
    next()
}

module.exports = {logger,EventLog}