const router = require("express").Router();
const ValidationError = require("../core/exceptions");
const userRepository  = require("../repository/user");
const albumRepository = require("../repository/album")
const postRepository = require("../repository/post");
const todoRepository = require("../repository/todo")
const userValidator = require("../validators/user");

router.get("/", (req,res) =>{
    res.send(userRepository.getAll())
})

router.post("/", (req,res) =>{
    const {body:user} = req;
    res.status(201).send(user)
})

router.delete("/:userId" , (req,res) =>{
    const { params : {userId}} = req
    const user =userRepository.getById(userId);
    if(user){
        res.status(200).send(user);
    }
    else{
        res.status(400).send();
    }
})

router.put("/:userId" , (req,res) =>{
    const { params : {userId}} = req
    const user =userRepository.getById(userId);
    if(user){
        res.status(200).send(user);
    }
    else{
        res.status(400).send();
    }
})

router.get("/:userId/albums", (req,res) =>{
    const { params : {userId}} = req
    const album = albumRepository.getUser(userId);
    if(album){
        res.status(200).send(album);
    }
    else{
        res.status(400).send();
    }
})

router.get("/:userId/posts", (req,res) =>{
    const { params : {userId}} = req
    const post = postRepository.getUser(userId);
    if(post){
        res.status(200).send(post);
    }
    else{
        res.status(400).send();
    }
})

router.get("/:userId/todos", (req,res) =>{
    const { params : {userId}} = req
    const todo = todoRepository.getUser(userId);
    if(todo){
        res.status(200).send(todo);
    }
    else{
        res.status(400).send();
    }
})

module.exports = router;