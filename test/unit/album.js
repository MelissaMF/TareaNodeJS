const { assert, expect} = require('chai')
const albumBodyValidator = require('../../bodyValidators/album')
const ValidationError = require('../../core/exceptions')

describe('Album Body Validator', () => {
    describe('title', () => {
        it('Todos los campos deben ser completados', () => {
            try {
                const album = {
                    'userid' : 1,
                    'id': 1,
                    'title' : 'Miau1234567890'
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
                    'userid' : 1,
                    'id': 1,
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