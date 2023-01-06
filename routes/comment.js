const router = require("express").Router();
const ValidationError = require("../core/exceptions");
const commentRepository  = require("../repository/comment");
const commentValidator = require("../bodyValidators/comment");

router.get("/", (req,res) =>{
    res.send(commentRepository.getAll());
})

router.post("/", (req,res) =>{
    const {body:comment} = req;
    try{
        commentValidator.save(comment);
        res.status(201).send(comment)
    }catch(error){
        if(error instanceof ValidationError){
            res.status(400).send({error: error.message})
            return
        }
        console.log(error)
        res.status(500).send()
    }
})

router.put("/:commentId" , (req,res) =>{
    const { params : {commentId}} = req
    const comment =commentRepository.getById(commentId);
    if(album){
        res.status(200).send(comment);
    }
    else{
        res.status(400).send();
    }
})

router.delete("/:commentId" , (req,res) =>{
    const { params : {commentId}} = req
    const comment =commentRepository.getById(commentId);
    if(album){
        res.status(200).send(comment);
    }
    else{
        res.status(400).send();
    }
})
module.exports = router;