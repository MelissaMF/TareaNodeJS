/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { assert, expect } = require('chai')
const photoBodyValidation = require('../../bodyValidators/photo')
const ValidationError = require('../../core/exceptions')

describe('Photo Body Validator', () => {
  describe('Title', () => {
    it('No debería estar vacío', () => {
      try {
        const photo = {
          title: 'abcdefghij',
          url: 'www.miaumiau.cl',
          thumbnailUrl: 'abcdelfghij'
        }
        assert.doesNotThrow(() => photoBodyValidation.save(photo), ValidationError)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    })
  })

  describe('url', () => {
    it('No debería estar vacío', () => {
      try {
        const photo = {
          title: 'abcdefghij',
          url: 'www.miaumiau.cl',
          thumbnailUrl: 'abcdelfghij'
        }
        assert.doesNotThrow(() => photoBodyValidation.save(photo), ValidationError)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    })

    it('Revise HTTPS', () => {
      try {
        const photo = {
          title: 'abcdefghij',
          url: 'hps://www.miaumiau.cl',
          thumbnailUrl: 'abcdelfghij'
        }
        assert.throw(() => photoBodyValidation.save(photo), ValidationError)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    })
  })

  describe('thumbnailUrl', () => {
    it('No debería estar vacío', () => {
      try {
        const photo = {
          title: 'abcdefghij',
          url: 'www.miaumiau.cl',
          thumbnailUrl: 'abcdelfghij'
        }
        assert.doesNotThrow(() => photoBodyValidation.save(photo), ValidationError)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    })
  })
})
