const express = require('express');
const { getItems, createItem, getItem, updateItem, deleteItem } = require('../controllers/usersController');
const { validatorCreateItem, validatorGetItem } = require('../validators/users');

const router = express.Router();

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", validatorCreateItem, createItem);
router.put("/:id", validatorGetItem, updateItem);
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;