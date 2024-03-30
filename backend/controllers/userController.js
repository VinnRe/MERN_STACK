const User = require('../models/userModel')

// Login user
const loginUser = async (req, res) => {
    res.json({msg: 'Login User'})
}


// Signup user
const signupUser = async (req, res) => {
    res.json({msg: 'Signup User'})
}


module.exports = { signupUser, loginUser }