const Note = require("../model/Note")

// get all 
const getAllNotes = async(req,res)=>{
    try {
        const notes = await Note.find({})
        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const addNewNote = async(req,res)=>{
    try {
        const note = await Note.create(req.body)
        res.status(201).json(note)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getNote = async(req,res)=>{
    try {
        const id = req.params.id
        const note = await Note.findById(id)
        if(!note){
            res.status(404).json({msg:'note not found'})
        }
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updateNote = async(req,res)=>{
    try {
        const id = req.params.id
        const note = await Note.findByIdAndUpdate(id)
        if(!note){
            res.status(404).json({msg:'note not found'})
        }
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteNote = async(req,res)=>{
    try {
        const id = req.params.id
        const note = await Note.findByIdAndDelete(id)
        if(!note){
            res.status(404).json({msg:'note not found'})
        }
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = {getAllNotes,getNote,addNewNote,updateNote,deleteNote}