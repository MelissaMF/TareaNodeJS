const router = require("express").Router();
const ValidationError = require("../core/exceptions");
const albumRepository  = require("../repository/album");
const photoRepository = require("../repository/photo")
const albumValidator = require("../bodyValidators/album");

router.post("/", async (req,res) =>{
    const {body:album} = req;
    try{
        albumValidator.save(album);
        const newAlbum = await albumRepository.save(album)
        res.status(201).send()
    }catch(error){
        if(error instanceof ValidationError){
            res.status(400).send({error: error.message})
            return
        }
        res.status(500).send()
    }
})

router.get("/", async (req,res) =>{
    try {
        res.send(await albumRepository.getAll())
    } catch (error) {
        if (error instanceof ValidationError) {
            res.status(400).send({error: error.message})
            return
        }
        res.status(500).send()
    }
})

router.get("/:albumId", async (req,res) =>{
    const { params: {albumId} } = req
    const album = await albumRepository.getById(albumId)
    if(album)
    res.status(200).send(album)
    else
    res.status(400).send()
   
})

router.put("/:albumId" , async (req,res) =>{
    const { params : {albumId}} = req
    const album = await albumRepository.getById(albumId);
    if(album){
        res.status(200).send(album);
    }
    else{
        res.status(400).send();
    }
})

router.delete("/:albumId" , (req,res) =>{
    const { params : {albumId}} = req
    const album = albumRepository.getById(albumId);
    if(album){
        res.status(200).send(album);
    }
    else{
        res.status(400).send();
    }
})

router.get("/:albumId/photos" , (req,res) =>{
    const { params : {albumId}} = req
    const photo = photoRepository.getAlbum(albumId);
    if(photo){
        res.status(200).send(photo);
    }
    else{
        res.status(400).send();
    }
})
module.exports = router;