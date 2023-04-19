const isUsernameValid = (username) => {
    
    const res = /^[A-Za-z0-9_\.]+$/.exec(username); // eslint-disable-line
    const valid = !!res;
    return valid;

}

const isLengthValid = (username, password) => {

    if (username.length >= 6 && username.length <= 16 && password.length >= 6) return true;
    else return false;

}

const isEmailValid = (email) => {

	const res = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.exec(email); // eslint-disable-line
    const valid = !!res;
    return valid;

}

const isUsernameTaken = async (db, username) => {
    try {
        const command = "SELECT `username` FROM `Users` WHERE `username` = (?)";
    
        let rows = await db.query(command, [username]);
    
        if (rows.length != 0) return true;
        else return false;

    } catch (error) {
        console.error(`\n[isUsernameTaken-error]:\n${error}\n`);
    }
}

const isEmailTaken = async (db, email) => {
    try {
        const command = "SELECT `email` FROM `Users` WHERE `email` = (?)";

        let rows = await db.query(command, [email]);

        if (rows.length != 0) return true;
        else return false;

    } catch (error) {
        console.error(`\n[isEmailTaken-error]:\n${error}\n`);
    }
}

const getHashedPassword = async (db, username) => {
    try {
        const command = "SELECT `password` FROM `Users` WHERE `username` = (?)";

        let rows = await db.query(command, [username]);

        if (rows.length != 0) return rows[0].password;
        else return "";

    } catch (error) {
        console.error(`\n[getHashedPassword-error]:\n${error}\n`);
    }
}

module.exports = {isUsernameValid, isLengthValid, isEmailValid, isUsernameTaken, isEmailTaken, getHashedPassword};