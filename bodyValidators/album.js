const ValidationError = require('../core/exceptions');

const save = album => {
    let {title} = album;

title = title.trim();

//Completación
if(title.length == 0){
    throw new ValidationError("Todos los campos deben ser completados")
}

//Title
if(title.length<10 || title.length>50){
    throw new ValidationError("Revise extensión del título");
}


}
module.exports = {
    save
}