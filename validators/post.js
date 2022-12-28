const ValidationError = require('../core/exceptions');

const save = post => {
    let {title, body} = post;

title = title.trim();
body = body.trim();

//Completación Campos
if(title.length == 0 || body.length == 0){
    throw new ValidationError("Todos los campos deben ser completados")
}

//Title
if(title.length<100 || title.length>500){
    throw new ValidationError("Revise extensión del título");
}
//Body
if(body.length<100 || body.length>500){
    throw new ValidationError("Revise extensión del cuerpo");
}

}
module.exports = {
    save
}