const router = require('express').Router()
const ValidationError = require('../core/exceptions')
const todoRepository = require('../repository/todo')
const todoValidator = require('../bodyValidators/todo')

router.get('/', async (req, res) => {
  try {
    res.send(await todoRepository.getAll())
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).send({ error: error.message })
      return
    }
    res.status(500).send()
  }
})

router.post('/', async (req, res) => {
  const { body: todo } = req
  try {
    todoValidator.save(todo)
    const newTodo = await todoRepository.save(todo)
    res.status(201).send(newTodo)
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).send({ error: error.message })
      return
    }
    res.status(500).send()
  }
})

router.put('/:todoId', async (req, res) => {
  const { params: { todoId } } = req
  const todo = await todoRepository.getById(todoId)
  if (todo) {
    res.status(200).send(todo)
  } else {
    res.status(400).send()
  }
})

router.get('/:todoId', async (req, res) => {
  const { params: { todoId } } = req
  const todo = await todoRepository.getById(todoId)
  if (todo) {
    res.status(200).send(todo)
  } else {
    res.status(404).send()
  }
})

router.delete('/:todoId', async (req, res) => {
  const { params: { todoId } } = req
  const todo = await todoRepository.delete(todoId)
  if (todo) {
    res.status(200).send(todo)
  } else {
    res.status(400).send()
  }
})

module.exports = router
