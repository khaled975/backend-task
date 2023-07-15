const mongoose = require('mongoose')

const DBConnection = async ()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL)
    } catch (error) {
        console.log(error);
    }
}

module.exports = DBConnection