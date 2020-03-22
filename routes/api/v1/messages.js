const express = require('express');
const router = express.Router();
const msgController = require('../../../controllers/api/v1/messages');

router.get("/", msgController.getAll);
router.get("/:id", msgController.getId);
router.post("/", msgController.create);
router.put("/:id", msgController.update);
router.delete("/:id", msgController.remove);

module.exports= router;