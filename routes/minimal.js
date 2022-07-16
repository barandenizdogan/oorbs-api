var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let minimal = [
    {
        "full": "https://images.pexels.com/photos/2742725/pexels-photo-2742725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2742725/pexels-photo-2742725.jpeg?cs=srgb&dl=pexels-diana-2742725.jpg&fm=jpg",
        "Unid": "a1"
    },
    {
        "full": "https://images.pexels.com/photos/1858406/pexels-photo-1858406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1858406/pexels-photo-1858406.jpeg?cs=srgb&dl=pexels-athena-1858406.jpg&fm=jpg",
        "Unid": "a2"
    },
    {
        "full": "https://images.pexels.com/photos/2363814/pexels-photo-2363814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2363814/pexels-photo-2363814.jpeg?cs=srgb&dl=pexels-jeffrey-czum-2363814.jpg&fm=jpg",
        "Unid": "a3"
    },
    {
        "full": "https://images.pexels.com/photos/1029844/pexels-photo-1029844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1029844/pexels-photo-1029844.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1029844.jpg&fm=jpg",
        "Unid": "a4"
    },
    {
        "full": "https://images.pexels.com/photos/325812/pexels-photo-325812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/325812/pexels-photo-325812.jpeg?cs=srgb&dl=pexels-dom-gould-325812.jpg&fm=jpg",
        "Unid": "a5"
    },
    {
        "full": "https://images.pexels.com/photos/2501965/pexels-photo-2501965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2501965/pexels-photo-2501965.jpeg?cs=srgb&dl=pexels-jeffrey-czum-2501965.jpg&fm=jpg",
        "Unid": "a6"
    },
    {
        "full": "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?cs=srgb&dl=pexels-paula-schmidt-963486.jpg&fm=jpg",
        "Unid": "a7"
    },
    {
        "full": "https://images.pexels.com/photos/973506/pexels-photo-973506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/973506/pexels-photo-973506.jpeg?cs=srgb&dl=pexels-victor-freitas-973506.jpg&fm=jpg",
        "Unid": "a8"
    },
    {
        "full": "https://images.pexels.com/photos/545575/pexels-photo-545575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/545575/pexels-photo-545575.jpeg?cs=srgb&dl=pexels-ovan-545575.jpg&fm=jpg",
        "Unid": "a9"
    },
    {
        "full": "https://images.pexels.com/photos/3082150/pexels-photo-3082150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3082150/pexels-photo-3082150.jpeg?cs=srgb&dl=pexels-vlado-paunovic-3082150.jpg&fm=jpg",
        "Unid": "a0"
    },
    {
        "full": "https://images.pexels.com/photos/3794377/pexels-photo-3794377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3794377/pexels-photo-3794377.jpeg?cs=srgb&dl=pexels-olena-bohovyk-3794377.jpg&fm=jpg",
        "Unid": "b1"
    },
    {
        "full": "https://images.pexels.com/photos/987648/pexels-photo-987648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/987648/pexels-photo-987648.jpeg?cs=srgb&dl=pexels-izabella-%C3%A1rvai-987648.jpg&fm=jpg",
        "Unid": "b2"
    },
    {
        "full": "https://images.pexels.com/photos/3651577/pexels-photo-3651577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3651577/pexels-photo-3651577.jpeg?cs=srgb&dl=pexels-tetyana-kovyrina-3651577.jpg&fm=jpg",
        "Unid": "b3"
    },
    {
        "full": "https://images.pexels.com/photos/1964021/pexels-photo-1964021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1964021/pexels-photo-1964021.jpeg?cs=srgb&dl=pexels-henry-%26-co-1964021.jpg&fm=jpg",
        "Unid": "b4"
    },
    {
        "full": "https://images.pexels.com/photos/940299/pexels-photo-940299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/940299/pexels-photo-940299.jpeg?cs=srgb&dl=pexels-toa-heftiba-%C5%9Finca-940299.jpg&fm=jpg",
        "Unid": "b5"
    },
    {
        "full": "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?cs=srgb&dl=pexels-ksenia-chernaya-3952048.jpg&fm=jpg",
        "Unid": "b6"
    },
    {
        "full": "https://images.pexels.com/photos/4045697/pexels-photo-4045697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/4045697/pexels-photo-4045697.jpeg?cs=srgb&dl=pexels-anna-shvets-4045697.jpg&fm=jpg",
        "Unid": "b7"
    },
    {
        "full": "https://images.pexels.com/photos/4000421/pexels-photo-4000421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/4000421/pexels-photo-4000421.jpeg?cs=srgb&dl=pexels-wendy-wei-4000421.jpg&fm=jpg",
        "Unid": "b8"
    },
    {
        "full": "https://images.pexels.com/photos/3981677/pexels-photo-3981677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3981677/pexels-photo-3981677.jpeg?cs=srgb&dl=pexels-daria-shevtsova-3981677.jpg&fm=jpg",
        "Unid": "b9"
    },
    {
        "full": "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?cs=srgb&dl=pexels-luis-quintero-3731256.jpg&fm=jpg",
        "Unid": "b0"
    }
]

router.get('/', (req, res) => {
    res.send(minimal)
});
router.post('/', (req, res) => {
    const photo = req.body;
    minimal.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${photo.Unid} ADDED TO DATABASE`);
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