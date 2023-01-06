const { assert, expect} = require('chai')
const albumBodyValidator = require('../../bodyValidators/album')
const ValidationError = require('../../core/exceptions')
const { should } = require('chai')

describe('Album Body Validator', () => {
    describe('Title', () => {
        it('No debería ser vacío', () => {
            try {
                const album = {
                    'title' : 'Miau'
                }
                assert.doesNotThrow(() => albumBodyValidator.save(album), ValidationError)
                return Promise.resolve()
            } catch (error) {
                return Promise.reject(error)
            }
        })

        it('Revise extensión del titulo', () => {
            try {
                const album = {
                    'title' : '1234567890'
                }
                assert.doesNotThrow(() => albumBodyValidator.save(album), ValidationError)
                return Promise.resolve()
            } catch (error){
                return Promise.reject()
            }
        })
    })
})