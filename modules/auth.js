const env = require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const validator = require("./validators");

const login = async (db, generateAccessToken, req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const hashedPassword = await validator.getHashedPassword(db, username);

        if (!username || !password) return res.json("wrong_request");

        if (!validator.isLengthValid(username, password)) return res.json("short_or_long");

        if (!await bcrypt.compare(password, hashedPassword)) return res.json("wrong_auth_data");

        const checkUser = "SELECT `id` FROM `Users` WHERE `username` = (?) AND `password` = (?);"
        let rows = await db.query(checkUser, [username, hashedPassword]);

        if(rows.length !== 0) {

            const user = {id: rows[0].id};

            const accessToken = generateAccessToken(user);
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN, {expiresIn: "30m"});

            return res.json({ accessToken: accessToken, refreshToken: refreshToken });

        } else return res.json("wrong_auth_data");

    } catch (error) {
        console.error(`\n[app-post-login-error]:\n${error}\n`);
        setTimeout(() => {
            console.log(`Stay alive!`);
            login(db, generateAccessToken, req, res);
        }, 5000);
    }
}

const register = async (db, generateAccessToken, req, res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        if (!username || !email || !password) return res.json("wrong_request");
        if (!validator.isLengthValid(username, password)) return res.json("short_or_long");
        if (!validator.isUsernameValid(username)) return res.json("invalid_username");
        if (!validator.isEmailValid(email)) return res.json("invalid_email");

        if (await validator.isUsernameTaken(db, username)) return res.json("username_taken");
        if (await validator.isEmailTaken(db, email)) return res.json("email_taken");

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const command = "INSERT INTO `Users` (`id`, `username`, `email`, `password`) VALUES (NULL, (?), (?), (?));";
        let rows = await db.query(command, [username, email, hashedPassword]);
        
        if (rows.affectedRows >= 1) {

            const user = {id: rows.insertId};

            const accessToken = generateAccessToken(user);
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN, {expiresIn: "30m"});

            return res.json({ accessToken: accessToken, refreshToken: refreshToken });

        } else return res.json("invalid_request")

    } catch (error) {
        console.error(`\n[app-post-register-error]:\n${error}\n`);
        setTimeout(() => {
            console.log(`Stay alive!`);
            register(db, generateAccessToken, req, res);
        }, 5000);
    }
}

module.exports = {login, register};