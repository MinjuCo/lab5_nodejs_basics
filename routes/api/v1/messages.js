const express = require('express');
const router = express.Router();
const msgController = require('../../../controllers/api/v1/messages');

router.get("/", msgController.getAll);
router.post("/", msgController.create);

module.exports= router;