const ValidationError = require('../core/exceptions')

const save = user => {
  let {
    name, username, email,
    address: {
      street, suite, city, zipcode,
      geo: { lat, lng }
    },
    phone, website,
    company: { nameCompany, catchPhrase, bs }
  } = user

  // Completación
  if (name.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (username.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (email.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (street.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (suite.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (city.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (zipcode.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (lat.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (lng.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (phone.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (website.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (nameCompany.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (catchPhrase.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }
  if (bs.length === 0) {
    throw new ValidationError('Todos los campos deben ser completados')
  }

  // Name
  if (name.length < 10 || name.length > 50) {
    throw new ValidationError('Revise extensión del nombre')
  }
  // Username
  if (username.length < 10 || username.length > 50) {
    throw new ValidationError('Revise extensión del username')
  }
  // email
  if (email.length < 10 || email.length > 50) {
    throw new ValidationError('Revise extensión del email')
  }
  email = email.split('.')
  if (email[email.length - 1] !== 'com' && email[email.length - 1] !== 'cl') {
    throw new ValidationError('Revise dominio de correo')
  }
  // street
  if (street.length < 10 || street.length > 50) {
    throw new ValidationError('Revise extensión de la calle')
  }
  // suite
  if (suite.length < 10 || suite.length > 50) {
    throw new ValidationError('Revise extensión del suite')
  }
  // City
  if (city.length < 10 || city.length > 50) {
    throw new ValidationError('Revise extensión de la ciudad')
  }
  // Website
  if (website.length < 10 || website.length > 50) {
    throw new ValidationError('Revise extensión del website')
  }
  // nameCompany
  if (nameCompany.length < 10 || nameCompany.length > 50) {
    throw new ValidationError('Revise extensión del nombre de la compañía')
  }
  // catchPhrase
  if (catchPhrase.length < 10 || catchPhrase.length > 50) {
    throw new ValidationError('Revise extensión del catch phrase')
  }
  // BS
  if (bs.length < 10 || bs.length > 50) {
    throw new ValidationError('Revise extensión del bs')
  }
}

module.exports = {
  save
}
