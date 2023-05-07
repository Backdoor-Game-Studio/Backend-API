const validators = require("./validators");

const getSaves = async (db, req, res) => {
    try {

        const getSave = "SELECT `data` FROM `Saves` WHERE `userId` = (?);"
        let saveRows = await db.query(getSave, [req.user.id]);

        if(saveRows.length !== 0) return res.json(saveRows);
        else return res.json("not_have_saves");

    } catch (error) {
        console.error(`\n[app-get-saves-error]:\n${error}\n`);
        setTimeout(() => {
            console.log(`Stay alive!`);
            getSaves(db, req, res);
        }, 5000);
    }
}

const deleteSave = async (db, req, res) => {
    try {
        const saveName = req.body.savename;

        const getSave = "SELECT `id`, `data` FROM `Saves` WHERE `userId` = (?);"
        let saveRows = await db.query(getSave, [req.user.id]);

        if(saveRows.length !== 0) {

            const datas = Object.keys(saveRows);

            for (let i = 0; i < datas.length; i++) {

                if (JSON.parse(saveRows[i].data).Save.name === saveName) {

                    const deleteCommand = "DELETE `Saves` FROM `Saves` WHERE `id` = (?);"
                    let delRows = await db.query(deleteCommand, [saveRows[i].id]);

                    if (delRows.affectedRows > 0) return res.json("successfully_delete");
                    else return res.json("wrong_delete");

                }
            }

            return res.json("wrong_savename");

        } else return res.json("not_have_saves");

        
    } catch (error) {
        console.error(`\n[app-get-delete_save-error]:\n${error}\n`);
        setTimeout(() => {
            console.log(`Stay alive!`);
            deleteSave(db, req, res);
        }, 5000);
    }
}

const createSave = async (db, req, res) => {
    try {
        const saveData = req.body.save;

        if (validators.isValidSave(saveData)) {

            const getSave = "SELECT `data` FROM `Saves` WHERE `userId` = (?);"
            let saveRows = await db.query(getSave, [req.user.id]);

            const datas = Object.keys(saveRows);
            
            if (datas.length !== 5) {

                if (saveRows) {

                    for (let i = 0; i < datas.length; i++) {
                        if (JSON.parse(saveRows[i].data).Save.name === JSON.parse(saveData).Save.name) return res.json("savename_taken");
                    }
        
                    const saveCommand = "INSERT INTO `Saves` (`id`, `userId`, `data`) VALUES (NULL, (?), (?))";
                    let createRows = await db.query(saveCommand, [req.user.id, saveData]);

                    if (createRows.affectedRows > 0) return res.json("successfully_create");
                    else return res.json("wrong_create");

                } else return res.json("invalid_create");

            } else return res.json("max_save_number");

        } else return res.json("not_valid_save");

    } catch (error) {
        console.error(`\n[app-get-create_save-error]:\n${error}\n`);
        setTimeout(() => {
            console.log(`Stay alive!`);
            createSave(db, req, res);
        }, 5000);
    }
}

const editSave = async (db, req, res) => {
    try {
        const saveData = req.body.save;

        if (validators.isValidSave(saveData)) {

            const getSave = "SELECT `id`, `data` FROM `Saves` WHERE `userId` = (?);"
            let saveRows = await db.query(getSave, [req.user.id]);

            const datas = Object.keys(saveRows);

            if (saveRows.length !== 0) {

                for (let i = 0; i < datas.length; i++) {
                    if (JSON.parse(saveRows[i].data).Save.name === JSON.parse(saveData).Save.name) {

                        const editSave = "UPDATE `Saves` SET `data` = (?) WHERE `id` = (?);";
                        let editRows = await db.query(editSave, [saveData, saveRows[i].id]);

                        if (editRows.length !== 0) return res.json("successfully_edit");
                        else return res.json("wrong_edit");
                    }
                }

                return res.json("invalid_edit");

            } else return res.json("not_have_saves");

        } else return res.json("not_valid_save");

    } catch (error) {
        console.error(`\n[app-get-edit_save-error]:\n${error}\n`);
        setTimeout(() => {
            console.log(`Stay alive!`);
            editSave(db, req, res);
        }, 5000);
    }
}

const editSaveName = async (db, req, res) => {
    try {
        const saveName = req.body.savename;
        const editName = req.body.editname;

        const getSave = "SELECT `id`, `data` FROM `Saves` WHERE `userId` = (?);"
        let saveRows = await db.query(getSave, [req.user.id]);

        const datas = Object.keys(saveRows);

        if (saveName === editName) return res.json("equal_names");
    
        if (saveRows.length !== 0) {
            for (let i = 0; i < datas.length; i++) {
                if (JSON.parse(saveRows[i].data).Save.name === saveName) {

                    let data = JSON.parse(saveRows[i].data);
                    data.Save.name = editName;

                    const editSave = "UPDATE `Saves` SET `data` = (?) WHERE `id` = (?);";
                    let editRows = await db.query(editSave, [JSON.stringify(data), saveRows[i].id]);

                    if (editRows.length !== 0) return res.json("successfully_edit_name");
                    else return res.json("wrong_edit_name");
                }
            }

            return res.json("invalid_edit_name");

        } else return res.json("not_have_saves");


    } catch (error) {
        console.error(`\n[app-get-edit_save_name-error]:\n${error}\n`);
        setTimeout(() => {
            console.log(`Stay alive!`);
            editSaveName(db, req, res);
        }, 5000); 
    }
}

module.exports = {getSaves, deleteSave, createSave, editSave, editSaveName};