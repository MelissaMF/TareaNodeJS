const { assert, expect } = require('chai')
const photoBodyValidation = require('../../bodyValidators/photo')
const ValidationError = require('../../core/exceptions')

describe('Photo Body Validator', () => {
    describe('Title', () => {
        it('No debería estar vacío', () => {
            try {
                const album = {
                    'title' : 'abcdefghij',
                    'url' : 'www.miaumiau.cl',
                    'thumbnailUrl': 'abcdelfghij'
                }
                assert.doesNotThrow(() => photoBodyValidation.save(photo), ValidationError)
                return Promise.resolve()
            } catch (error) {
                return Promise.reject()
            }
        })
    })
})