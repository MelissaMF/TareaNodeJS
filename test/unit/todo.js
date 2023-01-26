const { assert, expect } = require('chai')
const todoBodyValidation = require('../../bodyValidators/todo')
const ValidationError = require('../../core/exceptions')

describe('Todo Body Validator', () => {
    describe('Title', () => {
        it('No debería estar vacío', () => {
            try {
                const album = {
                    'title' : 'abcdefghij',
                    'completed' : true
                }
                assert.doesNotThrow(() => todoBodyValidation.save(photo), ValidationError)
                return Promise.resolve()
            } catch (error) {
                return Promise.reject()
            }
        })
    })
})