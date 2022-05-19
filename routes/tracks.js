const express = require('express');
const router = express.Router();
const { getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem } = require('../controllers/tracksController');

//TODO: http://localhost/tracks GET POST DELETE PUT

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.get("/", updateItem);
router.get("/", deleteItem);



module.exports = router;