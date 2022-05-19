const express = require('express');
const router = express.Router();
const {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
} = require('../controllers/tracksController');
const { validatorCreateItem } = require('../validators/tracks')

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", validatorCreateItem, createItem);
router.get("/", updateItem);
router.get("/", deleteItem);



module.exports = router;