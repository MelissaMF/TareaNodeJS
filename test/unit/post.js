const { assert, expect } = require('chai')
const postBodyValidation = require('../../bodyValidators/post')
const ValidationError = require('../../core/exceptions')

describe('Post Body Validator', () => {
    describe('Title', () => {
        it('No debería estar vacío', () => {
            try {
                const album = {
                    'title' : 'abcdefghij',
                    'body' : 'abcdefghij'
                }
                assert.doesNotThrow(() => postBodyValidation.save(photo), ValidationError)
                return Promise.resolve()
            } catch (error) {
                return Promise.reject()
            }
        })
    })
})