const env = require("dotenv").config();
const jwt = require("jsonwebtoken");

const getNewToken = (generateAccessToken, req, res) => {
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
}

module.exports = {getNewToken};