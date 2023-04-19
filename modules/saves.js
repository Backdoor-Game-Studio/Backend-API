const getSaves = async (db, req, res) => {
    try {

        const getSave = "SELECT `data` FROM `Saves` WHERE `userId` = (?);"
        let saveRows = await db.query(getSave, [req.user.id]);

        if(saveRows.length !== 0) return res.json(saveRows);
        else return res.json("not_have_saves");

    } catch (error) {
        console.error(`\n[app-get-saves-error]:\n${error}\n`);
    }
}

module.exports = {getSaves};