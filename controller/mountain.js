var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

let mountain = [];


export const createPhoto = (req, res) => {
    const photo = req.body;
    mountain.push({ ...photo, Unid: uuidv4() }); 
    res.send(`PHOTO WITH THE ID ${photo.Unid} ADDED TO DATABASE`);
}
export const getPhoto = (req, res) => {
    res.send(mountain)
}
export const getUnidPhoto = (req, res) => {
    const { Unid } = req.params;
    const foundPhoto = mountain.find((photo) => photo.Unid == Unid);
    res.send(foundPhoto);
}
export const deletePhoto = (req, res) => {
    const { Unid } = req.params;
    mountain = mountain.filter((photo) => photo.Unid != Unid)
    res.send(`Photo with Unid ${Unid} deleted from the database.`);
}
export const patchPhoto = (req, res) => {
    const { Unid } = req.params;
    const { full, download } = req.params;
    const photo = mountain.find((photo) => photo.Unid == Unid);
    if(full) photo.full = full; 
    if(download) photo.download = download;
    res.send(`Photo with the Unid ${Unid} has been updated.`)
}
