var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let wallpaper = [
    {
        "full": "https://www.gstatic.com/prettyearth/assets/full/1097.jpg",
        "download": "https://www.gstatic.com/prettyearth/assets/full/1097.jpg",
        "Unid": "a1"
    },
    {
        "full": "https://images.pexels.com/photos/12790459/pexels-photo-12790459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/12790459/pexels-photo-12790459.jpeg?cs=srgb&dl=pexels-connor-steinert-12790459.jpg&fm=jpg",
        "Unid": "a2"
    },
    {
        "full": "https://images.pexels.com/photos/12624892/pexels-photo-12624892.jpeg?cs=srgb&dl=pexels-mathias-reding-12624892.jpg&fm=jpg",
        "download": "https://images.pexels.com/photos/12624892/pexels-photo-12624892.jpeg?cs=srgb&dl=pexels-mathias-reding-12624892.jpg&fm=jpg",
        "Unid": "a3"
    },
    {
        "full": "https://images.pexels.com/photos/12776953/pexels-photo-12776953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/12776953/pexels-photo-12776953.jpeg?cs=srgb&dl=pexels-mathias-reding-12776953.jpg&fm=jpg",
        "Unid": "a4"
    },
    {
        "full": "https://images.unsplash.com/photo-1657838623417-b2bfcd9b512b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        "download": "https://unsplash.com/photos/QITb6fCvnZE/download?ixid=MnwxMjA3fDB8MXxhbGx8MTd8fHx8fHwyfHwxNjU3OTIwNjYw",
        "Unid": "a5"
    },
    {
        "full": "https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        "download": "https://unsplash.com/photos/3l3RwQdHRHg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3OTE5NjU0",
        "Unid": "a6"
    },
    {
        "full": "https://images.unsplash.com/photo-1503327431567-3ab5e6e79140?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        "download": "https://unsplash.com/photos/MA8YoAoKpfY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjR8fHdhbGxwYXBlcnxlbnwwfHx8fDE2NTc5MTI1MTU",
        "Unid": "a7"
    },
    {
        "full": "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "download": "https://unsplash.com/photos/9XngoIpxcEo/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8YWJzdHJhY3R8ZW58MHx8fHwxNjU3OTE0OTM5",
        "Unid": "a8"
    },
    {
        "full": "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80",
        "download": "https://unsplash.com/photos/pEgsWN0kwbQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8YWJzdHJhY3R8ZW58MHx8fHwxNjU3OTE0OTM5",
        "Unid": "a9"
    },
    {
        "full": "https://www.gstatic.com/prettyearth/assets/full/11566.jpg",
        "download": "https://www.gstatic.com/prettyearth/assets/full/11566.jpg",
        "Unid": "a0"
    },
    {
        "full": "https://www.gstatic.com/prettyearth/assets/full/13956.jpg",
        "download": "https://www.gstatic.com/prettyearth/assets/full/13956.jpg",
        "Unid": "b1"
    },
    {
        "full": "https://www.gstatic.com/prettyearth/assets/full/12101.jpg",
        "download": "https://www.gstatic.com/prettyearth/assets/full/12101.jpg",
        "Unid": "b2"
    },
    {
        "full": "https://images.unsplash.com/photo-1567360425618-1594206637d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80",
        "download": "https://unsplash.com/photos/ioJBsYQ-pPM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3OTIyNjI1",
        "Unid": "b3"
    },
    {
        "full": "https://images.pexels.com/photos/913807/pexels-photo-913807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/913807/pexels-photo-913807.jpeg?cs=srgb&dl=pexels-sitthan-kutty-913807.jpg&fm=jpg",
        "Unid": "b4"
    },
    {
        "full": "https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?cs=srgb&dl=pexels-jo%C3%A3o-cabral-3299386.jpg&fm=jpg",
        "Unid": "b5"
    },
    {
        "full": "https://images.pexels.com/photos/1841447/pexels-photo-1841447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1841447/pexels-photo-1841447.jpeg?cs=srgb&dl=pexels-matheus-oliveira-1841447.jpg&fm=jpg",
        "Unid": "b6"
    },
    {
        "full": "https://images.pexels.com/photos/2588197/pexels-photo-2588197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/2588197/pexels-photo-2588197.jpeg?cs=srgb&dl=pexels-nicolas-2588197.jpg&fm=jpg",
        "Unid": "b7"
    },
    {
        "full": "https://images.pexels.com/photos/273935/pexels-photo-273935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/273935/pexels-photo-273935.jpeg?cs=srgb&dl=pexels-pixabay-273935.jpg&fm=jpg",
        "Unid": "b8"
    },
    {
        "full": "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1287145.jpg&fm=jpg",
        "Unid": "b9"
    },
    {
        "full": "https://images.pexels.com/photos/6043246/pexels-photo-6043246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/6043246/pexels-photo-6043246.jpeg?cs=srgb&dl=pexels-mike-sember-6043246.jpg&fm=jpg",
        "Unid": "b0"
    },
    {
        "full": "https://images.pexels.com/photos/5219233/pexels-photo-5219233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "download": "https://images.pexels.com/photos/5219233/pexels-photo-5219233.jpeg?cs=srgb&dl=pexels-brent-olson-5219233.jpg&fm=jpg",
        "Unid": "789d0dc7-32e8-4387-b710-f88b17a53414"
    }
]

router.get('/', (req, res) => {
    res.send(wallpaper)
});
router.post('/', (req, res) => {
    const photo = req.body;
    wallpaper.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${photo.Unid} ADDED TO DATABASE`);
});
router.get('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const foundPhoto = wallpaper.find((photo) => photo.Unid == Unid);
    res.send(foundPhoto);
});
router.delete('/:Unid', (req, res) => {
    const { Unid } = req.params;
    wallpaper = wallpaper.filter((photo) => photo.Unid != Unid)
    res.send(`Photo with Unid ${Unid} deleted from the database.`);
});
router.put('/:Unid', (req, res) => {
    const { Unid } = req.params;
    const { full, download } = req.body;
    const photo = wallpaper.find((photo) => photo.Unid == Unid);
    if(full) photo.full = full; 
    if(download) photo.download = download;
    res.send(`Photo with the Unid ${Unid} has been updated.`)
}
);

module.exports = router;