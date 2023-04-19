console.log("Starting server...");

const express = require('express');
const cors = require('cors');
const app = express();
const { json } = require('body-parser');
const env = require("dotenv").config();
const jwt = require("jsonwebtoken");

app.use(cors({origin: "*"}));
app.use(express.json({type:'application/json'}));
app.use(express.urlencoded({extended: true}));

const connectDB = require("./modules/connectDB");
const auth = require("./modules/auth");
const token = require("./modules/token");
const saves = require("./modules/saves");
const userinfo = require("./modules/userinfo");

let db = connectDB.connect().then(connection => db = connection);

const server_port = 4545;

const server = app.listen(server_port, () => {
    try {
        console.log(`Server running on port: ${server_port}`);
    } catch (error) {
        console.error(`\n[server-listen-error]:\n${error}\n`);
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

app.post("/register", async (req, res) => auth.register(db, generateAccessToken, req, res));

app.post("/login", async (req, res) => auth.login(db, generateAccessToken, req, res));

app.post("/token", (req, res) => token.getNewToken(generateAccessToken, req, res));

app.get("/saves", authenticateToken, async (req, res) => saves.getSaves(db, req, res));

app.get("/userinfo", authenticateToken, async (req, res) => userinfo.getUserInfo(db, req, res));