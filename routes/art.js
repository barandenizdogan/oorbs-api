var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let art = [
    {
        "full": "https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?cs=srgb&dl=pexels-deeana-arts-1646953.jpg&fm=jpg",
        "Unid": "a1"
    },
    {
        "full": "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?cs=srgb&dl=pexels-steve-johnson-1585325.jpg&fm=jpg",
        "Unid": "a2"
    },
    {
        "full": "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?cs=srgb&dl=pexels-ann-h-1762851.jpg&fm=jpg",
        "Unid": "a3"
    },
    {
        "full": "https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?cs=srgb&dl=pexels-chait-goli-1918290.jpg&fm=jpg",
        "Unid": "a4"
    },
    {
        "full": "https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?cs=srgb&dl=pexels-tom-balabaud-1579708.jpg&fm=jpg",
        "Unid": "a5"
    },
    {
        "full": "https://images.pexels.com/photos/1570779/pexels-photo-1570779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1570779/pexels-photo-1570779.jpeg?cs=srgb&dl=pexels-steve-johnson-1570779.jpg&fm=jpg",
        "Unid": "a6"
    },
    {
        "full": "https://images.pexels.com/photos/3683187/pexels-photo-3683187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3683187/pexels-photo-3683187.jpeg?cs=srgb&dl=pexels-anna-shvets-3683187.jpg&fm=jpg",
        "Unid": "a7"
    },
    {
        "full": "https://images.pexels.com/photos/3683209/pexels-photo-3683209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3683209/pexels-photo-3683209.jpeg?cs=srgb&dl=pexels-anna-shvets-3683209.jpg&fm=jpg",
        "Unid": "a8"
    },
    {
        "full": "https://images.pexels.com/photos/1280730/pexels-photo-1280730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1280730/pexels-photo-1280730.jpeg?cs=srgb&dl=pexels-stas-knop-1280730.jpg&fm=jpg",
        "Unid": "a9"
    },
    {
        "full": "https://images.pexels.com/photos/820735/pexels-photo-820735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/820735/pexels-photo-820735.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-820735.jpg&fm=jpg",
        "Unid": "a0"
    },
    {
        "full": "https://images.pexels.com/photos/2020267/pexels-photo-2020267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2020267/pexels-photo-2020267.jpeg?cs=srgb&dl=pexels-wendy-wei-2020267.jpg&fm=jpg",
        "Unid": "b1"
    },
    {
        "full": "https://images.pexels.com/photos/700413/pexels-photo-700413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/700413/pexels-photo-700413.jpeg?cs=srgb&dl=pexels-rov-camato-700413.jpg&fm=jpg",
        "Unid": "b2"
    },
    {
        "full": "https://images.pexels.com/photos/2088170/pexels-photo-2088170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2088170/pexels-photo-2088170.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-2088170.jpg&fm=jpg",
        "Unid": "b3"
    },
    {
        "full": "https://images.pexels.com/photos/937788/pexels-photo-937788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/937788/pexels-photo-937788.jpeg?cs=srgb&dl=pexels-alizee-marchand-937788.jpg&fm=jpg",
        "Unid": "b4"
    },
    {
        "full": "https://images.pexels.com/photos/230514/pexels-photo-230514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/230514/pexels-photo-230514.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-230514.jpg&fm=jpg",
        "Unid": "b5"
    },
    {
        "full": "https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?cs=srgb&dl=pexels-pixabay-262896.jpg&fm=jpg",
        "Unid": "b6"
    },
    {
        "full": "https://images.pexels.com/photos/3541916/pexels-photo-3541916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3541916/pexels-photo-3541916.jpeg?cs=srgb&dl=pexels-matheus-viana-3541916.jpg&fm=jpg",
        "Unid": "b7"
    },
    {
        "full": "https://images.pexels.com/photos/3330118/pexels-photo-3330118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3330118/pexels-photo-3330118.jpeg?cs=srgb&dl=pexels-jeffrey-czum-3330118.jpg&fm=jpg",
        "Unid": "b8"
    },
    {
        "full": "https://images.pexels.com/photos/797648/pexels-photo-797648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/797648/pexels-photo-797648.jpeg?cs=srgb&dl=pexels-rov-camato-797648.jpg&fm=jpg",
        "Unid": "b9"
    },
    {
        "full": "https://images.pexels.com/photos/274021/pexels-photo-274021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/274021/pexels-photo-274021.jpeg?cs=srgb&dl=pexels-pixabay-274021.jpg&fm=jpg",
        "Unid": "b0"
    }
]

router.get('/', (req, res) => {
    res.send(art)
});
router.post('/', (req, res) => {
    const photo = req.body;
    art.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${photo.Unid} ADDED TO DATABASE`);
});
router.get('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const foundPhoto = art.find((photo) => photo.Unid == Unid);
    res.send(foundPhoto);
});
router.delete('/:Unid', (req, res) => {
    const { Unid } = req.params;
    art = art.filter((photo) => photo.Unid != Unid)
    res.send(`Photo with Unid ${Unid} deleted from the database.`);
});
router.patch('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const { full, download } = req.params;
    const photo = art.find((photo) => photo.Unid == Unid);
    if(full) photo.full = full; 
    if(download) photo.download = download;
    res.send(`Photo with the Unid ${Unid} has been updated.`)
});

module.exports = router;