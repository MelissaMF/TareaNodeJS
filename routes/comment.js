const router = require("express").Router();
const ValidationError = require("../core/exceptions");
const commentRepository  = require("../repository/comment");
const commentValidator = require("../validators/comment");

router.get("/", (req,res) =>{
    res.send(commentRepository.getAll());
})

router.post("/", (req,res) =>{
    const {body:comment} = req;
    res.status(201).send(comment)
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