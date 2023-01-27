const router = require('express').Router()
const ValidationError = require('../core/exceptions')
const commentRepository = require('../repository/comment')
const commentValidator = require('../bodyValidators/comment')

router.get('/', async (req, res) => {
  try {
    res.send(await commentRepository.getAll())
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).send({ error: error.message })
      return
    }
    res.status(500).send()
  }
})

router.post('/', async (req, res) => {
  const { body: comment } = req
  try {
    commentValidator.save(comment)
    const newComment = await commentRepository.save(comment)
    res.status(201).send(newComment)
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).send({ error: error.message })
      return
    }
    console.log(error)
    res.status(500).send()
  }
})

router.put('/:commentId', async (req, res) => {
  const { params: { commentId } } = req
  const comment = await commentRepository.update(commentId)
  if (comment) {
    res.status(200).send(comment)
  } else {
    res.status(400).send()
  }
})

router.get('/:commentId', async (req, res) => {
  const { params: { commentId } } = req
  const comment = await commentRepository.getById(commentId)
  if (comment) {
    res.status(200).send(comment)
  } else {
    res.status(400).send()
  }
})

router.delete('/:commentId', async (req, res) => {
  const { params: { commentId } } = req
  const comment = await commentRepository.delete(commentId)
  if (comment) {
    res.status(200).send(comment)
  } else {
    res.status(400).send()
  }
})
module.exports = router
