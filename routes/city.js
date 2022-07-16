var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let city = [
    {
        "full": "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?cs=srgb&dl=pexels-david-skyrius-2129796.jpg&fm=jpg",
        "Unid": "a1"
    },
    {
        "full": "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?cs=srgb&dl=pexels-jiarong-deng-1034662.jpg&fm=jpg",
        "Unid": "a2"
    },
    {
        "full": "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?cs=srgb&dl=pexels-ricardo-esquivel-1563256.jpg&fm=jpg",
        "Unid": "a3"
    },
    {
        "full": "https://images.pexels.com/photos/1123972/pexels-photo-1123972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1123972/pexels-photo-1123972.jpeg?cs=srgb&dl=pexels-deva-darshan-1123972.jpg&fm=jpg",
        "Unid": "a4"
    },
    {
        "full": "https://images.pexels.com/photos/1738991/pexels-photo-1738991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1738991/pexels-photo-1738991.jpeg?cs=srgb&dl=pexels-brayden-law-1738991.jpg&fm=jpg",
        "Unid": "a5"
    },
    {
        "full": "https://images.pexels.com/photos/242124/pexels-photo-242124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/242124/pexels-photo-242124.jpeg?cs=srgb&dl=pexels-kaique-rocha-242124.jpg&fm=jpg",
        "Unid": "a6"
    },
    {
        "full": "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?cs=srgb&dl=pexels-cameron-casey-1722183.jpg&fm=jpg",
        "Unid": "a7"
    },
    {
        "full": "https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?cs=srgb&dl=pexels-cameron-casey-1157255.jpg&fm=jpg",
        "Unid": "a8"
    },
    {
        "full": "https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?cs=srgb&dl=pexels-mantas-sinkevi%C4%8Dius-1106476.jpg&fm=jpg",
        "Unid": "a9"
    },
    {
        "full": "https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg?cs=srgb&dl=pexels-craig-adderley-1525612.jpg&fm=jpg",
        "Unid": "a0"
    },
    {
        "full": "https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?cs=srgb&dl=pexels-kehn-hermano-3849167.jpg&fm=jpg",
        "Unid": "b1"
    },
    {
        "full": "https://images.pexels.com/photos/1668928/pexels-photo-1668928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1668928/pexels-photo-1668928.jpeg?cs=srgb&dl=pexels-guilherme-rossi-1668928.jpg&fm=jpg",
        "Unid": "b2"
    },
    {
        "full": "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?cs=srgb&dl=pexels-josh-hild-3573382.jpg&fm=jpg",
        "Unid": "b3"
    },
    {
        "full": "https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?cs=srgb&dl=pexels-misael-garcia-1707823.jpg&fm=jpg",
        "Unid": "b4"
    },
    {
        "full": "https://images.pexels.com/photos/2304917/pexels-photo-2304917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2304917/pexels-photo-2304917.jpeg?cs=srgb&dl=pexels-alex-qian-2304917.jpg&fm=jpg",
        "Unid": "b5"
    },
    {
        "full": "https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?cs=srgb&dl=pexels-benjamin-suter-3617457.jpg&fm=jpg",
        "Unid": "b6"
    },
    {
        "full": "https://images.pexels.com/photos/1705073/pexels-photo-1705073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1705073/pexels-photo-1705073.jpeg?cs=srgb&dl=pexels-guilherme-rossi-1705073.jpg&fm=jpg",
        "Unid": "b7"
    },
    {
        "full": "https://images.pexels.com/photos/816461/pexels-photo-816461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/816461/pexels-photo-816461.jpeg?cs=srgb&dl=pexels-jonnathas-luis-de-silva-816461.jpg&fm=jpg",
        "Unid": "b8"
    },
    {
        "full": "https://images.pexels.com/photos/4652131/pexels-photo-4652131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/4652131/pexels-photo-4652131.jpeg?cs=srgb&dl=pexels-taryn-elliott-4652131.jpg&fm=jpg",
        "Unid": "b9"
    },
    {
        "full": "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-2603464.jpg&fm=jpg",
        "Unid": "b0"
    }
]


router.get('/', (req, res) => {
    res.send(city)
});
router.post('/', (req, res) => {
    const photo = req.body;
    city.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${photo.Unid} ADDED TO DATABASE`);
});
router.get('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const foundPhoto = city.find((photo) => photo.Unid == Unid);
    res.send(foundPhoto);
});
router.delete('/:Unid', (req, res) => {
    const { Unid } = req.params;
    city = city.filter((photo) => photo.Unid != Unid)
    res.send(`Photo with Unid ${Unid} deleted from the database.`);
});
router.patch('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const { full, download } = req.params;
    const photo = city.find((photo) => photo.Unid == Unid);
    if(full) photo.full = full; 
    if(download) photo.download = download;
    res.send(`Photo with the Unid ${Unid} has been updated.`)
}
);

module.exports = router;