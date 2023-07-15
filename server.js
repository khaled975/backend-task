require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const path = require('path')

// db connection
const mongoose = require('mongoose')
const DBConnection = require('./config/dbConnection')

const cors = require('cors')
const corsOptions = require('./config/corsOptions')

// logger handler
const { logger } = require('./middleware/logger')
const  errLogger  = require('./middleware/errLogger')

//  backend routes
const rootRouter = require('./routes/root')
const viewsPages = path.join(__dirname,'./views')

// note router
const noteRouter = require('./routes/note')
// user router
const userRouter = require('./routes/user')

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


DBConnection()
app.use(cors(corsOptions))

app.use(logger)

app.use(express.json())

app.use('/',express.static(viewsPages))
app.use('/',rootRouter)

app.use('/notes',noteRouter)
app.use('/users',userRouter)







app.all('*',(req,res)=>{
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'./views/404.html'))
    }else if (req.accepts('json')){
        res.json({msg:'404 page not found'})
    }else{
        res.send('404 page not found')
    }
})




app.use(errLogger)
mongoose.connection.once('open',()=>{
    console.log('al is running successfully');
    app.listen(port,()=>{
        console.log(`running on port ${port}`);
    })
})