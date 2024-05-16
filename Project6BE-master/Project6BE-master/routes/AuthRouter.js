const express = require("express");
const jwt = require('jsonwebtoken');

const User = require("../db/userModel");
const router = express.Router();
const { hashPassword, comparePassword } = require('../config/HashPassword');

const HttpStatusCode=require('../Exception/HttpStatusCode');

router.post("/login", async (req, res) => {
    try {
        debugger;
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(HttpStatusCode.BAD_REQUEST).json({ message: "Login fail" });
        }
        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            return res.status(HttpStatusCode.BAD_REQUEST).json({ message: "Login fail" });
        }

        const payload = { email: email }
        const token = jwt.sign(payload, process.env.jwt_signature, { expiresIn: '10 days' });

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3600000
        });

        return res.status(HttpStatusCode.OK).json({ message: "Login success",
            data:token
         });

    } catch (error) {
        // console.error("Error:", error);
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: "Login error!" });
    }
});

router.post("/logout", async (req, res) => {
    try {
        // console.log("logout");
        res.clearCookie("token");
        return res.status(HttpStatusCode.OK).json({ message: "Logout success" });
    } catch (error) {
        // console.log(error);
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: "Login error!" });
    }
});

router.post("/register", async (req, res) => {
    try {
        debugger;
        const email = req.body.email.trim();
        const password = req.body.password.trim();
        const firstname = req.body.firstname.trim();
        const lastname = req.body.lastname.trim();
        const location = req.body.location.trim();
        const occupation = req.body.occupation.trim();
        const description = req.body.description.trim();

        const existingUser = await User.findOne({ email });

        if (email === '') {
            return res.status(HttpStatusCode.BAD_REQUEST).
            json({ message: "Email cannot be blank" });
        } else if (password === '') {
            return res.status(HttpStatusCode.BAD_REQUEST).json(
                { message: "Password cannot be blank" });
        } else if (firstname === '') {
            return res.status(HttpStatusCode.BAD_REQUEST).json(
                { message: "First name cannot be blank" });
        } else if (lastname === '') {
            return res.status(HttpStatusCode.BAD_REQUEST).json(
                { message: "Last name cannot be blank" });
        }

        if (existingUser) {
            return res.status(HttpStatusCode.BAD_REQUEST).
            json({ message: "Email already exists" });
        }
        debugger

        const newUser = new User({
            first_name: firstname,
            last_name: lastname,
            location: location,
            occupation: occupation,
            description: description,
            email: email,
            password: await hashPassword(password)
        });

        await newUser.save();

        res.status(HttpStatusCode.CREATED).json({ message: "User registered successfully",
            data: newUser
         });

    } catch (error) {
        
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: "Registration error!" });
    }
});

module.exports = router;