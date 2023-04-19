console.log("Starting server...");

const express = require('express');
const cors = require('cors');
const app = express();
const { json } = require('body-parser');
const env = require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

app.use(cors({origin: "*"}));
app.use(express.json({type:'application/json'}));
app.use(express.urlencoded({extended: true}));

const connectDB = require("./modules/connectDB");
const validator = require("./modules/validators")

let db = connectDB.connect().then(connection => db = connection);

const server_port = 4545;

const server = app.listen(server_port, () => {
    try {
        console.log(`Server running on port: ${server_port}`);
    } catch (error) {
        console.error(`\n[server-listen-error]:\n${error}\n`);
    }
});


app.post("/register", async (req, res) => {
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
    }
});


app.post("/login", async (req, res) => {

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
    }
});


const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn: "30s"});
}

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.json("not_have_access");

    jwt.verify(token, process.env.ACCESS_TOKEN, (error, user) => {
        if (error) return res.json("not_have_access");
        req.user = user;
        next();
    });
}

app.post("/token", (req, res) => {
    try {
        const refreshToken = req.body.token;

        if (refreshToken == null) return res.json("wrong_request")
        if (!refreshToken.includes(refreshToken)) return res.json("not_have_access");

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (error, user) => {
            if (error) return res.json("not_have_access");
            const accessToken = generateAccessToken({id: user.id});
            return res.json({accessToken: accessToken})
        })
    } catch (error) {
        console.error(`\n[app-post-token-error]:\n${error}\n`);
    }
});

app.get("/saves", authenticateToken, async (req, res) => {
    try {

        const getSave = "SELECT `data` FROM `Saves` WHERE `userId` = (?);"
        let saveRows = await db.query(getSave, [req.user.id]);

        if(saveRows.length !== 0) return res.json(saveRows);
        else return res.json("not_have_saves");

    } catch (error) {
        console.error(`\n[app-get-saves-error]:\n${error}\n`);
    }
});

app.get("/userinfo", authenticateToken, async (req, res) => {
    try {

        const getUserInfo = "SELECT `username`, `email` FROM `Users` WHERE `id` = (?);"
        let saveRows = await db.query(getUserInfo, [req.user.id]);

        if(saveRows.length !== 0) return res.json(saveRows);
        else return res.json("not_valid_user");

    } catch (error) {
        console.error(`\n[app-get-userInfo-error]:\n${error}\n`);
    }
});