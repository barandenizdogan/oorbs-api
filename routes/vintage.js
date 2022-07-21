var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let vintage = [
    {
        "full": "https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?cs=srgb&dl=pexels-pixabay-247929.jpg&fm=jpg",
        "Unid": "a1"
    },
    {
        "full": "https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?cs=srgb&dl=pexels-matthias-zomer-69020.jpg&fm=jpg",
        "Unid": "a2"
    },
    {
        "full": "https://images.pexels.com/photos/221299/pexels-photo-221299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/221299/pexels-photo-221299.jpeg?cs=srgb&dl=pexels-pixabay-221299.jpg&fm=jpg",
        "Unid": "a3"
    },
    {
        "full": "https://images.pexels.com/photos/1002669/pexels-photo-1002669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1002669/pexels-photo-1002669.jpeg?cs=srgb&dl=pexels-mikey-dabro-1002669.jpg&fm=jpg",
        "Unid": "a4"
    },
    {
        "full": "https://images.pexels.com/photos/1595087/pexels-photo-1595087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1595087/pexels-photo-1595087.jpeg?cs=srgb&dl=pexels-lilartsy-1595087.jpg&fm=jpg",
        "Unid": "a5"
    },
    {
        "full": "https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?cs=srgb&dl=pexels-pixabay-277559.jpg&fm=jpg",
        "Unid": "a6"
    },
    {
        "full": "https://images.pexels.com/photos/775414/pexels-photo-775414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/775414/pexels-photo-775414.jpeg?cs=srgb&dl=pexels-spencer-selover-775414.jpg&fm=jpg",
        "Unid": "a7"
    },
    {
        "full": "https://images.pexels.com/photos/2111759/pexels-photo-2111759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2111759/pexels-photo-2111759.jpeg?cs=srgb&dl=pexels-luis-quintero-2111759.jpg&fm=jpg",
        "Unid": "a8"
    },
    {
        "full": "https://images.pexels.com/photos/1030928/pexels-photo-1030928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1030928/pexels-photo-1030928.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1030928.jpg&fm=jpg",
        "Unid": "a9"
    },
    {
        "full": "https://images.pexels.com/photos/1371724/pexels-photo-1371724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1371724/pexels-photo-1371724.jpeg?cs=srgb&dl=pexels-donatello-trisolino-1371724.jpg&fm=jpg",
        "Unid": "a0"
    },
    {
        "full": "https://images.pexels.com/photos/2128028/pexels-photo-2128028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2128028/pexels-photo-2128028.jpeg?cs=srgb&dl=pexels-ekrulila-2128028.jpg&fm=jpg",
        "Unid": "b1"
    },
    {
        "full": "https://images.pexels.com/photos/5026978/pexels-photo-5026978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/5026978/pexels-photo-5026978.jpeg?cs=srgb&dl=pexels-cottonbro-5026978.jpg&fm=jpg",
        "Unid": "b2"
    },
    {
        "full": "https://images.pexels.com/photos/1975106/pexels-photo-1975106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1975106/pexels-photo-1975106.jpeg?cs=srgb&dl=pexels-anton-imbro-1975106.jpg&fm=jpg",
        "Unid": "b3"
    },
    {
        "full": "https://images.pexels.com/photos/416929/pexels-photo-416929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/416929/pexels-photo-416929.jpeg?cs=srgb&dl=pexels-pixabay-416929.jpg&fm=jpg",
        "Unid": "b4"
    },
    {
        "full": "https://images.pexels.com/photos/2260824/pexels-photo-2260824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2260824/pexels-photo-2260824.jpeg?cs=srgb&dl=pexels-arthur-brognoli-2260824.jpg&fm=jpg",
        "Unid": "b5"
    },
    {
        "full": "https://images.pexels.com/photos/2191013/pexels-photo-2191013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2191013/pexels-photo-2191013.jpeg?cs=srgb&dl=pexels-lopsan-2191013.jpg&fm=jpg",
        "Unid": "b6"
    },
    {
        "full": "https://images.pexels.com/photos/5824523/pexels-photo-5824523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/5824523/pexels-photo-5824523.jpeg?cs=srgb&dl=pexels-charlotte-may-5824523.jpg&fm=jpg",
        "Unid": "b7"
    },
    {
        "full": "https://images.pexels.com/photos/2332913/pexels-photo-2332913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2332913/pexels-photo-2332913.jpeg?cs=srgb&dl=pexels-ekrulila-2332913.jpg&fm=jpg",
        "Unid": "b8"
    },
    {
        "full": "https://images.pexels.com/photos/5273061/pexels-photo-5273061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/5273061/pexels-photo-5273061.jpeg?cs=srgb&dl=pexels-julia-volk-5273061.jpg&fm=jpg",
        "Unid": "b9"
    },
    {
        "full": "https://images.pexels.com/photos/2964779/pexels-photo-2964779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2964779/pexels-photo-2964779.jpeg?cs=srgb&dl=pexels-kei-scampa-2964779.jpg&fm=jpg",
        "Unid": "b0"
    }
]

router.get('/', (req, res) => {
    res.send(vintage)
});
router.post('/', (req, res) => {
    const photo = req.body;
    vintage.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${photo.Unid} ADDED TO DATABASE`);
});
router.get('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const foundPhoto = vintage.find((photo) => photo.Unid == Unid);
    res.send(foundPhoto);
});
router.delete('/:Unid', (req, res) => {
    const { Unid } = req.params;
    vintage = vintage.filter((photo) => photo.Unid != Unid)
    res.send(`Photo with Unid ${Unid} deleted from the database.`);
});
router.put('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const { full, download } = req.body;
    const photo = vintage.find((photo) => photo.Unid == Unid);
    if(full) photo.full = full; 
    if(download) photo.download = download;
    res.send(`Photo with the Unid ${Unid} has been updated.`)
});

module.exports = router;