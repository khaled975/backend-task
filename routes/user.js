const express = require('express')
const { SignUp, getAllUsers, getUser, updateUser, deleteUser } = require('../controllers/User')
const router = express.Router()


router.post('/signup',SignUp)
router.get('/getall',getAllUsers)
router.get('/getuser',getUser)
router.patch('/update',updateUser)
router.delete('/delete',deleteUser)


module.exports = router