const router = require("express").Router();
const ValidationError = require("../core/exceptions");
const postRepository  = require("../repository/post");
const commentRepository = require("../repository/comment")
const postValidator = require("../validators/post");

router.get("/", (req,res) =>{
    res.send(postRepository.getAll());
})

router.post("/", (req,res) =>{
    const {body:post} = req;
    res.status(201).send(post)
})

router.put("/:postId" , (req,res) =>{
    const { params : {postId}} = req
    const post =postRepository.getById(postId);
    if(post){
        res.status(200).send(post);
    }
    else{
        res.status(400).send();
    }
})

router.delete("/:postId" , (req,res) =>{
    const { params : {postId}} = req
    const post =postRepository.getById(postId);
    if(post){
        res.status(200).send(post);
    }
    else{
        res.status(400).send();
    }
})

router.get("/:postId/comments" , (req, res) =>{
    const { params : {postId}} = req
    const comment = commentRepository.getPost(postId);
    if(comment){
        res.status(200).send(comment);
    }
    else{
        res.status(400).send();
    }
})
module.exports = router;