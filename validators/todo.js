const ValidationError = require('../core/exceptions');

const save = todo => {
    let {title, completed} = todo;

title = title.trim();

//Completación
if(title.length == 0){
    throw new ValidationError("Todos los campos deben ser completados")
}
if(completed.length == 0){
    throw new ValidationError("Todos los campos deben ser completados")
}

//Title
if(title.length<10 || title.length>50){
    throw new ValidationError("Revise extensión del título");
}

//Completed
if(typeof completed != "boolean"){
    throw new ValidationError("Valor debe ser booleano")
}


}
module.exports = {
    save
}