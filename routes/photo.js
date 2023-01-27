const router = require('express').Router()
const ValidationError = require('../core/exceptions')
const photoRepository = require('../repository/photo')
const photoValidator = require('../bodyValidators/photo')

router.get('/', async (req, res) => {
  try {
    res.send(await photoRepository.getAll())
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).send({ error: error.message })
      return
    }
    res.status(500).send()
  }
})

router.post('/', async (req, res) => {
  const { body: photo } = req
  try {
    photoValidator.save(photo)
    const newPhoto = await photoRepository.save(photo)
    res.status(201).send(newPhoto)
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).send({ error: error.message })
      return
    }
    console.log(error)
    res.status(500).send()
  }
})

router.put('/:photoId', async (req, res) => {
  const { params: { photoId } } = req
  const photo = await photoRepository.update(photoId)
  if (photo) {
    res.status(200).send(photo)
  } else {
    res.status(400).send()
  }
})

router.get('/:photoId', async (req, res) => {
  const { params: { photoId } } = req
  const photo = await photoRepository.getById(photoId)
  if (photo) {
    res.status(200).send(photo)
  } else {
    res.status(404).send()
  }
})

router.delete('/:photoId', async (req, res) => {
  const { params: { photoId } } = req
  const photo = await photoRepository.delete(photoId)
  if (photo) {
    res.status(200).send(photo)
  } else {
    res.status(400).send()
  }
})
module.exports = router
