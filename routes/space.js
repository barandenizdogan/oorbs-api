var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let space = []

router.get('/', (req, res) => {
    res.send(space)
});
router.post('/', (req, res) => {
    const photo = req.body;
    space.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${Unid} ADDED TO DATABASE`);
});
router.get('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const foundPhoto = space.find((photo) => photo.Unid == Unid);
    res.send(foundPhoto);
});
router.delete('/:Unid', (req, res) => {
    const { Unid } = req.params;
    space = space.filter((photo) => photo.Unid != Unid)
    res.send(`Photo with Unid ${Unid} deleted from the database.`);
});
router.patch('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const { full, download } = req.params;
    const photo = space.find((photo) => photo.Unid == Unid);
    if(full) photo.full = full; 
    if(download) photo.download = download;
    res.send(`Photo with the Unid ${Unid} has been updated.`)
}
);

module.exports = router;