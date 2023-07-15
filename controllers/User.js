const Note = require("../model/Note")
const User = require("../model/User")

const SignUp = async(req,res)=>{
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const getAllUsers = async(req,res)=>{
    try {
        const id = req.params.id
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
const getUser = async(req,res)=>{
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if(!user){
            res.status(404).json({msg:'user not found'})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
const updateUser = async(req,res)=>{
    try {
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id)
        if(!user){
            res.status(404).json({msg:'user not found'})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        const checkNote = await Note.findOne({owner:id})
        if(!user){
            res.status(404).json({msg:'user not found'})
            if(checkNote){
                res.status(400).json({msg:'this user has notes'})
            }
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


module.exports = {SignUp,getAllUsers,getUser,updateUser,deleteUser}