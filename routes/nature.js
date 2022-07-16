var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let nature = [
    {
        "full": "https://images.pexels.com/photos/2400594/pexels-photo-2400594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2400594/pexels-photo-2400594.jpeg?cs=srgb&dl=pexels-trace-hudson-2400594.jpg&fm=jpg",
        "Unid": "a1"
    },
    {
        "full": "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?cs=srgb&dl=pexels-sam-kolder-2387873.jpg&fm=jpg",
        "download": "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?cs=srgb&dl=pexels-sam-kolder-2387873.jpg&fm=jpg",
        "Unid": "a2"
    },
    {
        "full": "https://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg?cs=srgb&dl=pexels-arnie-watkins-3156381.jpg&fm=jpg  ",
        "Unid": "a3"
    },
    {
        "full": "https://images.pexels.com/photos/3265460/pexels-photo-3265460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3265460/pexels-photo-3265460.jpeg?cs=srgb&dl=pexels-stijn-dijkstra-3265460.jpg&fm=jpg",
        "Unid": "a4"
    },
    {
        "full": "https://images.pexels.com/photos/2440061/pexels-photo-2440061.jpeg?cs=srgb&dl=pexels-ian-beckley-2440061.jpg&fm=jpg",
        "download": "https://images.pexels.com/photos/2440061/pexels-photo-2440061.jpeg?cs=srgb&dl=pexels-ian-beckley-2440061.jpg&fm=jpg",
        "Unid": "a5"
    },
    {
        "full": "https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?cs=srgb&dl=pexels-jeremy-bishop-3464632.jpg&fm=jpg",
        "Unid": "a6"
    },
    {
        "full": "https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?cs=srgb&dl=pexels-evgeny-tchebotarev-4101555.jpg&fm=jpg",
        "Unid": "a7"
    },
    {
        "full": "https://images.pexels.com/photos/3064079/pexels-photo-3064079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3064079/pexels-photo-3064079.jpeg?cs=srgb&dl=pexels-mengliu-di-3064079.jpg&fm=jpg",
        "Unid": "a8"
    },
    {
        "full": "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "download": "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?cs=srgb&dl=pexels-matteo-badini-4064432.jpg&fm=jpg",
        "Unid": "a9"
    },
    {
        "full": "https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?cs=srgb&dl=pexels-walid-ahmad-1509582.jpg&fm=jpg",
        "Unid": "a0"
    },
    {
        "full": "https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?cs=srgb&dl=pexels-jeremy-bishop-2524874.jpg&fm=jpg",
        "Unid": "b1"
    },
    {
        "full": "https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?cs=srgb&dl=pexels-cliford-mervil-2469122.jpg&fm=jpg",
        "Unid": "b2"
    },
    {
        "full": "https://images.pexels.com/photos/1755243/pexels-photo-1755243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1755243/pexels-photo-1755243.jpeg?cs=srgb&dl=pexels-zhaocan-li-1755243.jpg&fm=jpg",
        "Unid": "b3"
    },
    {
        "full": "https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?cs=srgb&dl=pexels-trace-hudson-2365457.jpg&fm=jpg",
        "Unid": "b4"
    },
    {
        "full": "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?cs=srgb&dl=pexels-ian-beckley-2792157.jpg&fm=jpg",
        "Unid": "b5"
    },
    {
        "full": "https://images.pexels.com/photos/4035587/pexels-photo-4035587.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "download": "https://images.pexels.com/photos/4035587/pexels-photo-4035587.jpeg?cs=srgb&dl=pexels-ekrulila-4035587.jpg&fm=jpg",
        "Unid": "b6"
    },
    {
        "full": "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?cs=srgb&dl=pexels-artem-saranin-1547813.jpg&fm=jpg",
        "Unid": "b7"
    },
    {
        "full": "https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?cs=srgb&dl=pexels-irina-iriser-1381679.jpg&fm=jpg",
        "Unid": "b8"
    },
    {
        "full": "https://images.pexels.com/photos/1336924/pexels-photo-1336924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1336924/pexels-photo-1336924.jpeg?cs=srgb&dl=pexels-satria-bagaskara-1336924.jpg&fm=jpg",
        "Unid": "b9"
    },
    {
        "full": "https://images.pexels.com/photos/219837/pexels-photo-219837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/219837/pexels-photo-219837.jpeg?cs=srgb&dl=pexels-pixabay-219837.jpg&fm=jpg",
        "Unid": "b0"
    }
]

router.get('/', (req, res) => {
    res.send(nature)
});
router.post('/', (req, res) => {
    const photo = req.body;
    nature.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${photo.Unid} ADDED TO DATABASE`);
});
router.get('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const foundPhoto = nature.find((photo) => photo.Unid == Unid);
    res.send(foundPhoto);
});
router.delete('/:Unid', (req, res) => {
    const { Unid } = req.params;
    nature = nature.filter((photo) => photo.Unid != Unid)
    res.send(`Photo with Unid ${Unid} deleted from the database.`);
});
router.patch('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const { full, download } = req.params;
    const photo = nature.find((photo) => photo.Unid == Unid);
    if(full) photo.full = full; 
    if(download) photo.download = download;
    res.send(`Photo with the Unid ${Unid} has been updated.`)
});

module.exports = router;