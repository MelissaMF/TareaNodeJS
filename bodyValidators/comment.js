const ValidationError = require('../core/exceptions')

const save = comment => {
  let { name, email, body } = comment

  name = name.trim()
  email = email.trim()
  body = body.trim()

  // Completación
  if (name.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (email.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (body.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }

  // Nombre
  if (name.length < 10 || name.length > 50) {
    throw new ValidationError('Revise extensión del nombre')
  }

  // Email
  email = email.split('.')
  if (email[email.length - 1] !== 'com' && email[email.length - 1] !== 'cl') {
    throw new ValidationError('Revise dominio de correo')
  }
  // Body
  if (body.length < 10 || body.length > 50) {
    throw new ValidationError('Revise extensión del cuerpo')
  }
}
module.exports = {
  save
}
