// auth controllers
const usermodel = require("../model/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function userRegister(req, res) {
    try {
        // process of registration begins:
        // 1. access user details
        const { username, email, password, role } = req.body;
        // check if user already exists in database collection
        const checkIfUserExists = await usermodel.findOne({$or : [{ username }, { email }]});
        if (checkIfUserExists) {
            return res.status(400).json({
                success : false,
                message : "User already exists with the same username or email."
            })
        }
        // if not, create new user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new usermodel({
            username : username,
            email : email,
            password : hashedPassword,
            role : role
        });
        // save new user in database collection.
        await newUser.save();
        if (newUser) {
            return res.status(201).json({
                success : true,
                message : "New user successfully added to database",
                data: newUser
            });
        } else {
            res.status(400).json({
                success : false,
                message : "Unable to create new user"
            });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({
            success : false,
            message : "Some error ocurred!. Please try again"
        });
    }
};

async function userLogin(req, res) {
    try {
        // login process begins:
        // 1. get user information
        const { username, password } = req.body;
        // 2. check if credentials.
        const checkExistingUserDetails = await usermodel.findOne({ username });
        if (!checkExistingUserDetails) {
            return res.status(400).json({
                success : false,
                message : "Invalid user credentials!"
            });
        } 
        // 3. check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, checkExistingUserDetails.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                success : false,
                message : "password invalid. Please try again"
            });
        }
        // 4. created token for user
        const accessToken = jwt.sign({
            userId : checkExistingUserDetails._id,
            username : checkExistingUserDetails.username,
            role: checkExistingUserDetails.role
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: "30m"
        });
        res.status(200).json({
            success : true,
            message : "User signed in successfully",
            accessToken
        });
    } catch(error) {
        console.error(error);
        res.status(500).json({
            success : false,
            message : "Some error ocurred!. Please try again"
        });
    }
};

module.exports = {
    userRegister,
    userLogin
};