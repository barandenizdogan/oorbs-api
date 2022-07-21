var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let neon = [
    {
        "full": "https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?cs=srgb&dl=pexels-ricardo-esquivel-1964471.jpg&fm=jpg",
        "Unid": "a1"
    },
    {
        "full": "https://images.pexels.com/photos/1080953/pexels-photo-1080953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1080953/pexels-photo-1080953.jpeg?cs=srgb&dl=pexels-mark-mccammon-1080953.jpg&fm=jpg",
        "Unid": "a2"
    },
    {
        "full": "https://images.pexels.com/photos/1986807/pexels-photo-1986807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1986807/pexels-photo-1986807.jpeg?cs=srgb&dl=pexels-kevin-bidwell-1986807.jpg&fm=jpg",
        "Unid": "a3"
    },
    {
        "full": "https://images.pexels.com/photos/2901581/pexels-photo-2901581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2901581/pexels-photo-2901581.jpeg?cs=srgb&dl=pexels-itzyphoto-2901581.jpg&fm=jpg",
        "Unid": "a4"
    },
    {
        "full": "https://images.pexels.com/photos/1690081/pexels-photo-1690081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1690081/pexels-photo-1690081.jpeg?cs=srgb&dl=pexels-sebastiaan-stam-1690081.jpg&fm=jpg",
        "Unid": "a5"
    },
    {
        "full": "https://images.pexels.com/photos/1801106/pexels-photo-1801106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1801106/pexels-photo-1801106.jpeg?cs=srgb&dl=pexels-sean-patrick-1801106.jpg&fm=jpg",
        "Unid": "a6"
    },
    {
        "full": "https://images.pexels.com/photos/2521470/pexels-photo-2521470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2521470/pexels-photo-2521470.jpeg?cs=srgb&dl=pexels-jaime-flores-2521470.jpg&fm=jpg",
        "Unid": "a7"
    },
    {
        "full": "https://images.pexels.com/photos/1528348/pexels-photo-1528348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1528348/pexels-photo-1528348.jpeg?cs=srgb&dl=pexels-mark-dalton-1528348.jpg&fm=jpg",
        "Unid": "a8"
    },
    {
        "full": "https://images.pexels.com/photos/2482129/pexels-photo-2482129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2482129/pexels-photo-2482129.jpeg?cs=srgb&dl=pexels-kazem-hussein-2482129.jpg&fm=jpg",
        "Unid": "a9"
    },
    {
        "full": "https://images.pexels.com/photos/3329717/pexels-photo-3329717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3329717/pexels-photo-3329717.jpeg?cs=srgb&dl=pexels-brayden-law-3329717.jpg&fm=jpg",
        "Unid": "a0"
    },
    {
        "full": "https://images.pexels.com/photos/1822717/pexels-photo-1822717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1822717/pexels-photo-1822717.jpeg?cs=srgb&dl=pexels-guilherme-rossi-1822717.jpg&fm=jpg",
        "Unid": "b1"
    },
    {
        "full": "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?cs=srgb&dl=pexels-jose-francisco-fernandez-saura-802024.jpg&fm=jpg",
        "Unid": "b2"
    },
    {
        "full": "https://images.pexels.com/photos/1178990/pexels-photo-1178990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1178990/pexels-photo-1178990.jpeg?cs=srgb&dl=pexels-nubia-navarro-%28nubikini%29-1178990.jpg&fm=jpg",
        "Unid": "b3"
    },
    {
        "full": "https://images.pexels.com/photos/3378994/pexels-photo-3378994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3378994/pexels-photo-3378994.jpeg?cs=srgb&dl=pexels-ruvim-3378994.jpg&fm=jpg",
        "Unid": "b4"
    },
    {
        "full": "https://images.pexels.com/photos/3358953/pexels-photo-3358953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3358953/pexels-photo-3358953.jpeg?cs=srgb&dl=pexels-jovydas-pinkevicius-3358953.jpg&fm=jpg",
        "Unid": "b5"
    },
    {
        "full": "https://images.pexels.com/photos/2840651/pexels-photo-2840651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2840651/pexels-photo-2840651.jpeg?cs=srgb&dl=pexels-lisa-2840651.jpg&fm=jpg",
        "Unid": "b6"
    },
    {
        "full": "https://images.pexels.com/photos/3678857/pexels-photo-3678857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3678857/pexels-photo-3678857.jpeg?cs=srgb&dl=pexels-prateek-katyal-3678857.jpg&fm=jpg",
        "Unid": "b7"
    },
    {
        "full": "https://images.pexels.com/photos/3280178/pexels-photo-3280178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3280178/pexels-photo-3280178.jpeg?cs=srgb&dl=pexels-bence-lengyel-3280178.jpg&fm=jpg",
        "Unid": "b8"
    },
    {
        "full": "https://images.pexels.com/photos/1964474/pexels-photo-1964474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1964474/pexels-photo-1964474.jpeg?cs=srgb&dl=pexels-ricardo-esquivel-1964474.jpg&fm=jpg",
        "Unid": "b9"
    },
    {
        "full": "https://images.pexels.com/photos/4585184/pexels-photo-4585184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/4585184/pexels-photo-4585184.jpeg?cs=srgb&dl=pexels-alexander-ant-4585184.jpg&fm=jpg",
        "Unid": "b0"
    }
]

router.get('/', (req, res) => {
    res.send(neon)
});
router.post('/', (req, res) => {
    const photo = req.body;
    neon.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${photo.Unid} ADDED TO DATABASE`);
});
router.get('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const foundPhoto = neon.find((photo) => photo.Unid == Unid);
    res.send(foundPhoto);
});
router.delete('/:Unid', (req, res) => {
    const { Unid } = req.params;
    neon = neon.filter((photo) => photo.Unid != Unid)
    res.send(`Photo with Unid ${Unid} deleted from the database.`);
});
router.put('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const { full, download } = req.body;
    const photo = neon.find((photo) => photo.Unid == Unid);
    if(full) photo.full = full; 
    if(download) photo.download = download;
    res.send(`Photo with the Unid ${Unid} has been updated.`)
});

module.exports = router;