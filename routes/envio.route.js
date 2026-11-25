const express = require('express');
const router = express.Router();
const envioController = require("../controllers/envio.controller");

router.get('/', envioController.list);
router.get('/activos', envioController.active);
router.get('/:id', envioController.show);
router.post('/', envioController.save);
router.put('/:id', envioController.edit);
router.delete('/:id', envioController.remove);

module.exports = router;