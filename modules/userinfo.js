const getUserInfo = async (db, req, res) => {
    try {

        const getUserInfo = "SELECT `username`, `email` FROM `Users` WHERE `id` = (?);"
        let saveRows = await db.query(getUserInfo, [req.user.id]);

        if(saveRows.length !== 0) return res.json(saveRows);
        else return res.json("not_valid_user");

    } catch (error) {
        console.error(`\n[app-get-userInfo-error]:\n${error}\n`);
        setTimeout(() => {
            console.log(`Stay alive!`);
            getUserInfo(db, req, res);
        }, 5000);
    }
}

module.exports = {getUserInfo};