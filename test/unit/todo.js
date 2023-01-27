/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { assert, expect } = require('chai')
const todoBodyValidation = require('../../bodyValidators/todo')
const ValidationError = require('../../core/exceptions')

describe('Todo Body Validator', () => {
  describe('Title', () => {
    it('No debería estar vacío', () => {
      try {
        const todo = {
          title: 'abcdefghij',
          completed: true
        }
        assert.doesNotThrow(() => todoBodyValidation.save(todo), ValidationError)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    })
  })

  describe('Completed', () => {
    it('No debería estar vacío', () => {
      try {
        const todo = {
          title: 'abcdefghij',
          completed: true
        }
        assert.doesNotThrow(() => todoBodyValidation.save(todo), ValidationError)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    })

    it('Debe ser booleano', () => {
      try {
        const todo = {
          title: 'abcdefghij',
          completed: false
        }
        assert.doesNotThrow(() => todoBodyValidation.save(todo), ValidationError)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    })
  })
})
