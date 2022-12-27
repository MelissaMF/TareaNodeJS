const router = require("express").Router();
const ValidationError = require("../core/exceptions");
const photoRepository  = require("../repository/photo");
const photoValidator = require("../validators/photo");

router.get("/", (req,res) =>{
    res.send(photoRepository.getAll());
})

router.post("/", (req,res) =>{
    const {body:photo} = req;
    res.status(201).send(photo)
})

router.put("/:photoId" , (req,res) =>{
    const { params : {photoId}} = req
    const photo =photoRepository.getById(photoId);
    if(photo){
        res.status(200).send(photo);
    }
    else{
        res.status(400).send();
    }
})

router.delete("/:photoId" , (req,res) =>{
    const { params : {photoId}} = req
    const photo =photoRepository.getById(photoId);
    if(photo){
        res.status(200).send(photo);
    }
    else{
        res.status(400).send();
    }
})
module.exports = router;