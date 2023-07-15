const {EventLog} = require('./logger')


const errLogger = (err,req,res,next)=>{
    EventLog(`${err.name}:${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,'errLogs.log')
    const status = res.statusCode ? res.statusCode : 500
    res.status(status)
}


module.exports = errLogger