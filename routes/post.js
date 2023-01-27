const router = require('express').Router()
const ValidationError = require('../core/exceptions')
const postRepository = require('../repository/post')
const commentRepository = require('../repository/comment')
const postValidator = require('../bodyValidators/post')

router.get('/', async (req, res) => {
  try {
    res.send(await postRepository.getAll())
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).send({ error: error.message })
      return
    }
    res.status(500).send()
  }
})

router.post('/', async (req, res) => {
  const { body: post } = req
  try {
    postValidator.save(post)
    const newPost = await postRepository.save(post)
    res.status(201).send(newPost)
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).send({ error: error.message })
      return
    }
    res.status(500).send()
    console.log(error)
  }
})

router.put('/:postId', async (req, res) => {
  const { params: { postId } } = req
  const post = await postRepository.getById(postId)
  if (post) {
    res.status(200).send(post)
  } else {
    res.status(400).send()
  }
})

router.get('/:postId', async (req, res) => {
  const { params: { postId } } = req
  const post = await postRepository.getById(postId)
  if (post) {
    res.status(200).send(post)
  } else {
    res.status(404).send()
  }
})

router.delete('/:postId', async (req, res) => {
  const { params: { postId } } = req
  const post = await postRepository.delete(postId)
  if (post) {
    res.status(200).send(post)
  } else {
    res.status(400).send()
  }
})

router.get('/:postId/comments', (req, res) => {
  const { params: { postId } } = req
  const comment = commentRepository.getPost(postId)
  if (comment) {
    res.status(200).send(comment)
  } else {
    res.status(400).send()
  }
})
module.exports = router
