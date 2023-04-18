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

module.exports = {isUsernameValid, isLengthValid, isEmailValid};