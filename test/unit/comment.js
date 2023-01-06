const { assert, expect } = require('chai')
const commentBodyValidation = require('../../bodyValidators/comment')
const ValidationError = require('../../core/exceptions')
const { should } =require('chai')

describe('Comment Body Validator', () => {
    describe('Name', () => {
        it('No debería estar vacío', () => {
            try {
                const comment = {
                    'name': '',
                    'email' : 'miau@miau.cl',
                    'body': 'djfhdf'
                }
                assert.doesNotThrow(() => commentBodyValidation.save(comment), ValidationError)
                return Promise.resolve()
            } catch (error) {
                return Promise.reject()
            }
        })
    })
})