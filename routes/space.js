var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let space = [
    {
        "full": "https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?cs=srgb&dl=pexels-pixabay-87009.jpg&fm=jpg",
        "Unid": "a1"
    },
    {
        "full": "https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?cs=srgb&dl=pexels-chait-goli-2666598.jpg&fm=jpg",
        "Unid": "a2"
    },
    {
        "full": "https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?cs=srgb&dl=pexels-rakicevic-nenad-1274260.jpg&fm=jpg",
        "Unid": "a3"
    },
    {
        "full": "https://images.pexels.com/photos/544268/pexels-photo-544268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/544268/pexels-photo-544268.jpeg?cs=srgb&dl=pexels-luck-galindo-544268.jpg&fm=jpg",
        "Unid": "a4"
    },
    {
        "full": "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?cs=srgb&dl=pexels-pixabay-33688.jpg&fm=jpg",
        "Unid": "a5"
    },
    {
        "full": "https://images.pexels.com/photos/1114900/pexels-photo-1114900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1114900/pexels-photo-1114900.jpeg?cs=srgb&dl=pexels-johannes-plenio-1114900.jpg&fm=jpg",
        "Unid": "a6"
    },
    {
        "full": "https://images.pexels.com/photos/821644/pexels-photo-821644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/821644/pexels-photo-821644.jpeg?cs=srgb&dl=pexels-alex-andrews-821644.jpg&fm=jpg",
        "Unid": "a7"
    },
    {
        "full": "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?cs=srgb&dl=pexels-egil-sj%C3%B8holt-1906658.jpg&fm=jpg",
        "Unid": "a8"
    },
    {
        "full": "https://images.pexels.com/photos/731649/pexels-photo-731649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/731649/pexels-photo-731649.jpeg?cs=srgb&dl=pexels-ross-peebles-731649.jpg&fm=jpg",
        "Unid": "a9"
    },
    {
        "full": "https://images.pexels.com/photos/2753432/pexels-photo-2753432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2753432/pexels-photo-2753432.jpeg?cs=srgb&dl=pexels-wendy-wei-2753432.jpg&fm=jpg",
        "Unid": "a0"
    },
    {
        "full": "https://images.pexels.com/photos/2078126/pexels-photo-2078126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2078126/pexels-photo-2078126.jpeg?cs=srgb&dl=pexels-kush-kaushik-2078126.jpg&fm=jpg",
        "Unid": "b1"
    },
    {
        "full": "https://images.pexels.com/photos/355925/pexels-photo-355925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/355925/pexels-photo-355925.jpeg?cs=srgb&dl=pexels-pixabay-355925.jpg&fm=jpg",
        "Unid": "b2"
    },
    {
        "full": "https://images.pexels.com/photos/3680319/pexels-photo-3680319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3680319/pexels-photo-3680319.jpeg?cs=srgb&dl=pexels-alexandra-karnasopoulos-3680319.jpg&fm=jpg",
        "Unid": "b3"
    },
    {
        "full": "https://images.pexels.com/photos/1481432/pexels-photo-1481432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1481432/pexels-photo-1481432.jpeg?cs=srgb&dl=pexels-warren-blake-1481432.jpg&fm=jpg",
        "Unid": "b4"
    },
    {
        "full": "https://images.pexels.com/photos/2646380/pexels-photo-2646380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2646380/pexels-photo-2646380.jpeg?cs=srgb&dl=pexels-lucas-pezeta-2646380.jpg&fm=jpg",
        "Unid": "b5"
    },
    {
        "full": "https://images.pexels.com/photos/23764/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/23764/pexels-photo.jpg?cs=srgb&dl=pexels-spacex-23764.jpg&fm=jpg",
        "Unid": "b6"
    },
    {
        "full": "https://images.pexels.com/photos/2352277/pexels-photo-2352277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2352277/pexels-photo-2352277.jpeg?cs=srgb&dl=pexels-lucas-pezeta-2352277.jpg&fm=jpg",
        "Unid": "b7"
    },
    {
        "full": "https://images.pexels.com/photos/3511572/pexels-photo-3511572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3511572/pexels-photo-3511572.jpeg?cs=srgb&dl=pexels-jan-kop%C5%99iva-3511572.jpg&fm=jpg",
        "Unid": "b8"
    },
    {
        "full": "https://images.pexels.com/photos/2479646/pexels-photo-2479646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2479646/pexels-photo-2479646.jpeg?cs=srgb&dl=pexels-nathan-moore-2479646.jpg&fm=jpg",
        "Unid": "b9"
    },
    {
        "full": "https://images.pexels.com/photos/7672252/pexels-photo-7672252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/7672252/pexels-photo-7672252.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7672252.jpg&fm=jpg",
        "Unid": "b0"
    }
]

router.get('/', (req, res) => {
    res.send(space)
});
router.post('/', (req, res) => {
    const photo = req.body;
    space.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${photo.Unid} ADDED TO DATABASE`);
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