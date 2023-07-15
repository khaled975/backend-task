const express = require('express')
const { getAllNotes, getNote, addNewNote, updateNote, deleteNote } = require('../controllers/Note')
const router = express.Router()


router.get('/',getAllNotes)
router.get('/:id',getNote)
router.post('/add',addNewNote)
router.put('/update',updateNote)
router.delete('/',deleteNote)


module.exports = router