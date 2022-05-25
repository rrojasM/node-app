const bcryptjs = require('bcryptjs');
/**
 * Encriptar contraseña
 * @param {*} password 
 */
const encrypt = async (password) => {
    const hash = await bcryptjs.hash(password, 10);
    console.log(hash);
    return hash;
}

/**
 * Pasar contraseña y hash
 * @param {*} password 
 * @param {*} hash 
 */
const compare = async (password, hash) => {
    return await bcryptjs.compare(password, hash);
}


module.exports = { encrypt, compare };