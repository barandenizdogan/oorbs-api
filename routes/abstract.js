var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let abstract = [
    {
        "full": "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?cs=srgb&dl=pexels-anni-roenkae-2156881.jpg&fm=jpg",
        "Unid": "a1"
    },
    {
        "full": "https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?cs=srgb&dl=pexels-bruno-thethe-1910225.jpg&fm=jpg",
        "Unid": "a2"
    },
    {
        "full": "https://images.pexels.com/photos/1910231/pexels-photo-1910231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1910231/pexels-photo-1910231.jpeg?cs=srgb&dl=pexels-bruno-thethe-1910231.jpg&fm=jpg",
        "Unid": "a3"
    },
    {
        "full": "https://images.pexels.com/photos/1910230/pexels-photo-1910230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1910230/pexels-photo-1910230.jpeg?cs=srgb&dl=pexels-bruno-thethe-1910230.jpg&fm=jpg",
        "Unid": "a4"
    },
    {
        "full": "https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4046718.jpg&fm=jpg",
        "Unid": "a5"
    },
    {
        "full": "https://images.pexels.com/photos/6818037/pexels-photo-6818037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/6818037/pexels-photo-6818037.jpeg?cs=srgb&dl=pexels-luci-6818037.jpg&fm=jpg",
        "Unid": "a6"
    },
    {
        "full": "https://images.pexels.com/photos/1998479/pexels-photo-1998479.jpeg?cs=srgb&dl=pexels-sergio-souza-1998479.jpg&fm=jpg",
        "download": "https://images.pexels.com/photos/1998479/pexels-photo-1998479.jpeg?cs=srgb&dl=pexels-sergio-souza-1998479.jpg&fm=jpg",
        "Unid": "a7"
    },
    {
        "full": "https://images.pexels.com/photos/3607083/pexels-photo-3607083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3607083/pexels-photo-3607083.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-3607083.jpg&fm=jpg",
        "Unid": "a8"
    },
    {
        "full": "https://images.pexels.com/photos/1884303/pexels-photo-1884303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1884303/pexels-photo-1884303.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1884303.jpg&fm=jpg",
        "Unid": "a9"
    },
    {
        "full": "https://images.pexels.com/photos/4963096/pexels-photo-4963096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/4963096/pexels-photo-4963096.jpeg?cs=srgb&dl=pexels-giovanni-calia-4963096.jpg&fm=jpg",
        "Unid": "a0"
    },
    {
        "full": "https://images.pexels.com/photos/266429/pexels-photo-266429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/266429/pexels-photo-266429.jpeg?cs=srgb&dl=pexels-pixabay-266429.jpg&fm=jpg",
        "Unid": "b1"
    },
    {
        "full": "https://images.pexels.com/photos/4021530/pexels-photo-4021530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/4021530/pexels-photo-4021530.jpeg?cs=srgb&dl=pexels-andre-moura-4021530.jpg&fm=jpg",
        "Unid": "b2"
    },
    {
        "full": "https://images.pexels.com/photos/4297437/pexels-photo-4297437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/4297437/pexels-photo-4297437.jpeg?cs=srgb&dl=pexels-ave-calvar-martinez-4297437.jpg&fm=jpg",
        "Unid": "b3"
    },
    {
        "full": "https://images.pexels.com/photos/4793467/pexels-photo-4793467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/4793467/pexels-photo-4793467.jpeg?cs=srgb&dl=pexels-anni-roenkae-4793467.jpg&fm=jpg",
        "Unid": "b4"
    },
    {
        "full": "https://images.pexels.com/photos/4793459/pexels-photo-4793459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/4793459/pexels-photo-4793459.jpeg?cs=srgb&dl=pexels-anni-roenkae-4793459.jpg&fm=jpg",
        "Unid": "b5"
    },
    {
        "full": "https://images.pexels.com/photos/1762973/pexels-photo-1762973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1762973/pexels-photo-1762973.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-1762973.jpg&fm=jpg",
        "Unid": "b6"
    },
    {
        "full": "https://images.pexels.com/photos/2130475/pexels-photo-2130475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2130475/pexels-photo-2130475.jpeg?cs=srgb&dl=pexels-steve-johnson-2130475.jpg&fm=jpg",
        "Unid": "b7"
    },
    {
        "full": "https://images.pexels.com/photos/2397652/pexels-photo-2397652.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "download": "https://images.pexels.com/photos/2397652/pexels-photo-2397652.jpeg?cs=srgb&dl=pexels-jeremy-bishop-2397652.jpg&fm=jpg",
        "Unid": "b8"
    },
    {
        "full": "https://images.pexels.com/photos/137594/pexels-photo-137594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/137594/pexels-photo-137594.jpeg?cs=srgb&dl=pexels-scott-webb-137594.jpg&fm=jpg",
        "Unid": "b9"
    },
    {
        "full": "https://images.pexels.com/photos/2130474/pexels-photo-2130474.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "download": "https://images.pexels.com/photos/2130474/pexels-photo-2130474.jpeg?cs=srgb&dl=pexels-steve-johnson-2130474.jpg&fm=jpg",
        "Unid": "b0"
    }
];

router.get('/', (req, res) => {
    res.send(abstract)
});
router.post('/', (req, res) => {
    const photo = req.body;
    abstract.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${photo.Unid} ADDED TO DATABASE`);
});
router.get('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const foundPhoto = abstract.find((photo) => photo.Unid == Unid);
    res.send(foundPhoto);
});
router.delete('/:Unid', (req, res) => {
    const { Unid } = req.params;
    abstract = abstract.filter((photo) => photo.Unid != Unid)
    res.send(`Photo with Unid ${Unid} deleted from the database.`);
});
router.patch('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const { full, download } = req.params;
    const photo = abstract.find((photo) => photo.Unid == Unid);
    if(full) photo.full = full; 
    if(download) photo.download = download;
    res.send(`Photo with the Unid ${Unid} has been updated.`)
});

module.exports = router;