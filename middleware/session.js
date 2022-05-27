const { handleHttpError } = require('../utils/handleError');
const { verifyToken } = require('../utils/handleJwt');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, "NOT TOKEN", 401);
            return;
        }
        
        const token = req.headers.authorization.split(' ').pop();
        console.log({token});
        const dataToken = await verifyToken(token);

        console.log({dataToken});

        if (!dataToken._id) {
            handleHttpError(res, "ERROR ID TOKEN", 401);
            return;
        }
        next();
    } catch (error) {
        handleHttpError(res, "ERROR SESSION", 401)
    }

}

module.exports = authMiddleware;