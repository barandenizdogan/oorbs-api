var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let photos = []

router.get('/', (req, res) => {
    res.send(photos)
});
router.post('/', (req, res) => {
    const photo = req.body;
    photos.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${photo.Unid} ADDED TO DATABASE`);
});
router.get('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const foundPhoto = photos.find((photo) => photo.Unid == Unid);
    res.send(foundPhoto);
});
router.delete('/:Unid', (req, res) => {
    const { Unid } = req.params;
    photos = photos.filter((photo) => photo.Unid != Unid)
    res.send(`Photo with Unid ${Unid} deleted from the database.`);
});
router.put('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const { full, download } = req.body;
    const photo = photos.find((photo) => photo.Unid == Unid);
    if(full) photo.full = full; 
    if(download) photo.download = download;
    res.send(`Photo with the Unid ${Unid} has been updated.`)
});


module.exports = router;