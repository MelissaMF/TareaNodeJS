/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { assert, expect } = require('chai')
const commentBodyValidation = require('../../bodyValidators/comment')
const ValidationError = require('../../core/exceptions')

describe('Comment Body Validator', () => {
  describe('Name', () => {
    it('No debería estar vacío', () => {
      try {
        const comment = {
          name: 'abcdefghij',
          email: 'miau@miau.cl',
          body: 'djfhdfasdfgh'
        }
        assert.doesNotThrow(() => commentBodyValidation.save(comment), ValidationError)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    })
  })

  describe('Correo', () => {
    it('No debería estar vacío', () => {
      try {
        const comment = {
          name: 'abcdefghij',
          email: 'miau@miau.cl',
          body: 'djfhdfasdfgh'
        }
        assert.doesNotThrow(() => commentBodyValidation.save(comment), ValidationError)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    })

    it('Revise dominio de correo', () => {
      try {
        const comment = {
          name: 'abcdefghij',
          email: 'miau@miau.cl',
          body: 'djfhdfasdfgh'
        }
        assert.doesNotThrow(() => commentBodyValidation.save(comment), ValidationError)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    })
  })
  describe('Body', () => {
    it('No debería estar vacío', () => {
      try {
        const comment = {
          name: 'abcdefghij',
          email: 'miau@miau.cl',
          body: 'djfhdfasdfgh'
        }
        assert.doesNotThrow(() => commentBodyValidation.save(comment), ValidationError)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    })
  })
})
