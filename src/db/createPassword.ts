const bcrypt = require("bcrypt")

export async function generatePassword(length) {

    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * possibleChars.length);
        password += possibleChars[randomIndex];
    }

    return password;
}


