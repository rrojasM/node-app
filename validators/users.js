const { check } = require('express-validator');
const validationResults = require('../utils/handleValidator');


const validatorCreateItem = [
    check("name").exists().notEmpty(),
    check("age").exists().notEmpty(),
    check("email").exists().notEmpty(),
    check("password").exists().notEmpty(),
    (req, res, next) => {
        return validationResults(req, res, next);
    }
];

const validatorGetItem = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validationResults(req, res, next);
    }
];



module.exports = { validatorCreateItem, validatorGetItem }