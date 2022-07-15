var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let minimal = []

router.get('/', (req, res) => {
    res.send(minimal)
});
router.post('/', (req, res) => {
    const photo = req.body;
    minimal.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${Unid} ADDED TO DATABASE`);
});
router.get('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const foundPhoto = minimal.find((photo) => photo.Unid == Unid);
    res.send(foundPhoto);
});
router.delete('/:Unid', (req, res) => {
    const { Unid } = req.params;
    minimal = minimal.filter((photo) => photo.Unid != Unid)
    res.send(`Photo with Unid ${Unid} deleted from the database.`);
});
router.patch('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const { full, download } = req.params;
    const photo = minimal.find((photo) => photo.Unid == Unid);
    if(full) photo.full = full; 
    if(download) photo.download = download;
    res.send(`Photo with the Unid ${Unid} has been updated.`)
}
);

module.exports = router;