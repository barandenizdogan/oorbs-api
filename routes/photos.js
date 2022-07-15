var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { createPhoto, getPhoto, getUnidPhoto, deletePhoto, patchPhoto } = require('../controller/photos.js');


router.get('/', (req, res) => getPhoto);
router.post('/', (req, res) => createPhoto);
router.get('/:Unid', (req, res) => getUnidPhoto);
router.delete('/:Unid', (req, res) => deletePhoto);
router.patch('/:Unid', (req, res) => patchPhoto);


module.exports = router;