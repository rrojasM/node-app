const { handleHttpError } = require('../utils/handleError')


/**
 * Array con los roles permitidos
 * @param {*} rol 
 * @returns 
 */
const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        const rolesByUser = user.role;

        const checkValueRole = roles.some((rolSingle) => rolesByUser.includes(rolSingle));
        console.log({checkValueRole});
        if(!checkValueRole){
            handleHttpError(res, "USER NOT PERMISSION", 403);
            return;
        }
        next();
    } catch (error) {
        handleHttpError(res, "ERROR PERMISSION", 401)
    }
}


module.exports = checkRol;