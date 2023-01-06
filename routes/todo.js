const router = require("express").Router();
const ValidationError = require("../core/exceptions");
const todoRepository  = require("../repository/todo");
const todoValidator = require("../bodyValidators/todo");

router.get ("/", (req,res)=>{
    res.send(todoRepository.getAll());
})

router.post("/", (req,res) =>{
    const {body:todo} = req;
    try{
        todoValidator.save(todo);
        res.status(201).send(todo)
    }catch(error){
        if(error instanceof ValidationError){
            res.status(400).send({error: error.message})
            return
        }
        res.status(500).send()
    }
})

router.put("/:todoId" , (req,res) =>{
    const { params : {todoId}} = req
    const todo =todoRepository.getById(todoId);
    if(todo){
        res.status(200).send(todo);
    }
    else{
        res.status(400).send();
    }
})

router.delete("/:todoId" , (req,res) =>{
    const { params : {todoId}} = req
    const todo =todoRepository.getById(todoId);
    if(todo){
        res.status(200).send(todo);
    }
    else{
        res.status(400).send();
    }
})

module.exports = router;