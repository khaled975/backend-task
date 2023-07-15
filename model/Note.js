const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const NoteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    body:{
        type:String,
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})


// NoteSchema.plugin(AutoIncrement,{ 
//     inc_filed:'ticket',
//     id:'ticketNum',
//     start_seq:500
// })

const Note = mongoose.model('Note',NoteSchema)

module.exports = Note