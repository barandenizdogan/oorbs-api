var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let black = [
    {
        "full": "https://images.pexels.com/photos/1793525/pexels-photo-1793525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1793525/pexels-photo-1793525.jpeg?cs=srgb&dl=pexels-henry-%26-co-1793525.jpg&fm=jpg",
        "Unid": "a1"
    },
    {
        "full": "https://images.pexels.com/photos/450055/pexels-photo-450055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/450055/pexels-photo-450055.jpeg?cs=srgb&dl=pexels-tirachard-kumtanom-450055.jpg&fm=jpg",
        "Unid": "a2"
    },
    {
        "full": "https://images.pexels.com/photos/3048527/pexels-photo-3048527.png?auto=compress&cs=tinysrgb&w=1600",
        "download": "https://images.pexels.com/photos/3048527/pexels-photo-3048527.png?cs=srgb&dl=pexels-hidden-couple-3048527.jpg&fm=jpg",
        "Unid": "a3"
    },
    {
        "full": "https://images.pexels.com/photos/925743/pexels-photo-925743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/925743/pexels-photo-925743.jpeg?cs=srgb&dl=pexels-jo%C3%A3o-jesus-925743.jpg&fm=jpg",
        "Unid": "a4"
    },
    {
        "full": "https://images.pexels.com/photos/1632035/pexels-photo-1632035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1632035/pexels-photo-1632035.jpeg?cs=srgb&dl=pexels-rui-chaves-1632035.jpg&fm=jpg",
        "Unid": "a5"
    },
    {
        "full": "https://images.pexels.com/photos/1722179/pexels-photo-1722179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1722179/pexels-photo-1722179.jpeg?cs=srgb&dl=pexels-cameron-casey-1722179.jpg&fm=jpg",
        "Unid": "a6"
    },
    {
        "full": "https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg?cs=srgb&dl=pexels-pixabay-355747.jpg&fm=jpg",
        "Unid": "a7"
    },
    {
        "full": "https://images.pexels.com/photos/2027697/pexels-photo-2027697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2027697/pexels-photo-2027697.jpeg?cs=srgb&dl=pexels-anubhaw-anand-2027697.jpg&fm=jpg",
        "Unid": "a8"
    },
    {
        "full": "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?cs=srgb&dl=pexels-wendy-wei-1916824.jpg&fm=jpg",
        "Unid": "a9"
    },
    {
        "full": "https://images.pexels.com/photos/1806855/pexels-photo-1806855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1806855/pexels-photo-1806855.jpeg?cs=srgb&dl=pexels-mohamed-abdelsadig-1806855.jpg&fm=jpg",
        "Unid": "a0"
    },
    {
        "full": "https://images.pexels.com/photos/1258333/pexels-photo-1258333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1258333/pexels-photo-1258333.jpeg?cs=srgb&dl=pexels-vlad-bagacian-1258333.jpg&fm=jpg",
        "Unid": "b1"
    },
    {
        "full": "https://images.pexels.com/photos/1308187/pexels-photo-1308187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1308187/pexels-photo-1308187.jpeg?cs=srgb&dl=pexels-tyler-lastovich-1308187.jpg&fm=jpg",
        "Unid": "b2"
    },
    {
        "full": "https://images.pexels.com/photos/256453/pexels-photo-256453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/256453/pexels-photo-256453.jpeg?cs=srgb&dl=pexels-pixabay-256453.jpg&fm=jpg",
        "Unid": "b3"
    },
    {
        "full": "https://images.pexels.com/photos/134875/pexels-photo-134875.jpeg",
        "download": "https://images.pexels.com/photos/134875/pexels-photo-134875.jpeg?cs=srgb&dl=pexels-zukiman-mohamad-134875.jpg&fm=jpg",
        "Unid": "b4"
    },
    {
        "full": "https://images.pexels.com/photos/3817912/pexels-photo-3817912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3817912/pexels-photo-3817912.jpeg?cs=srgb&dl=pexels-parviz-besharat-pur-3817912.jpg&fm=jpg",
        "Unid": "b5"
    },
    {
        "full": "https://images.pexels.com/photos/3849160/pexels-photo-3849160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3849160/pexels-photo-3849160.jpeg?cs=srgb&dl=pexels-sharath-giri-3849160.jpg&fm=jpg",
        "Unid": "b6"
    },
    {
        "full": "https://images.pexels.com/photos/819806/pexels-photo-819806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/819806/pexels-photo-819806.jpeg?cs=srgb&dl=pexels-nikita-khandelwal-819806.jpg&fm=jpg",
        "Unid": "b7"
    },
    {
        "full": "https://images.pexels.com/photos/1547706/pexels-photo-1547706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1547706/pexels-photo-1547706.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1547706.jpg&fm=jpg",
        "Unid": "b8"
    },
    {
        "full": "https://images.pexels.com/photos/3601244/pexels-photo-3601244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3601244/pexels-photo-3601244.jpeg?cs=srgb&dl=pexels-jonathan-borba-3601244.jpg&fm=jpg",
        "Unid": "b9"
    },
    {
        "full": "https://images.pexels.com/photos/1579524/pexels-photo-1579524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1579524/pexels-photo-1579524.jpeg?cs=srgb&dl=pexels-alexander-krivitskiy-1579524.jpg&fm=jpg",
        "Unid": "b0"
    }
]

router.get('/', (req, res) => {
    res.send(black)
});
router.post('/', (req, res) => {
    const photo = req.body;
    black.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${photo.Unid} ADDED TO DATABASE`);
});
router.get('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const foundPhoto = black.find((photo) => photo.Unid == Unid);
    res.send(foundPhoto);
});
router.delete('/:Unid', (req, res) => {
    const { Unid } = req.params;
    black = black.filter((photo) => photo.Unid != Unid)
    res.send(`Photo with Unid ${Unid} deleted from the database.`);
});
router.patch('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const { full, download } = req.params;
    const photo = black.find((photo) => photo.Unid == Unid);
    if(full) photo.full = full; 
    if(download) photo.download = download;
    res.send(`Photo with the Unid ${Unid} has been updated.`)
});

module.exports = router;