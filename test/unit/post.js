/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { assert, expect } = require('chai')
const postBodyValidation = require('../../bodyValidators/post')
const ValidationError = require('../../core/exceptions')

describe('Post Body Validator', () => {
  describe('Title', () => {
    it('No debería estar vacío', () => {
      try {
        const post = {
          title: 'abcdefghij',
          body: 'abcdefghij'
        }
        assert.doesNotThrow(() => postBodyValidation.save(post), ValidationError)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    })
  })

  describe('Body', () => {
    it('No debería estar vacío', () => {
      try {
        const post = {
          title: 'abcdefghij',
          body: 'abcdefghij'
        }
        assert.doesNotThrow(() => postBodyValidation.save(post), ValidationError)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    })
  })
})
