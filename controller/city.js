var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let city = [];


export const createPhoto = (req, res) => {
    const photo = req.body;
    city.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${photo.Unid} ADDED TO DATABASE`);
}
export const getPhoto = (req, res) => {
    res.send(city)
}
export const getUnidPhoto = (req, res) => {
    const { Unid } = req.params;
    const foundPhoto = city.find((photo) => photo.Unid == Unid);
    res.send(foundPhoto);
}
export const deletePhoto = (req, res) => {
    const { Unid } = req.params;
    city = city.filter((photo) => photo.Unid != Unid)
    res.send(`Photo with Unid ${Unid} deleted from the database.`);
}
export const patchPhoto = (req, res) => {
    const { Unid } = req.params;
    const { full, download } = req.params;
    const photo = city.find((photo) => photo.Unid == Unid);
    if(full) photo.full = full; 
    if(download) photo.download = download;
    res.send(`Photo with the Unid ${Unid} has been updated.`)
}
