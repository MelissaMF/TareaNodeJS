const ValidationError = require('../core/exceptions');

const save = photo => {
    let {title, url, thumbnailUrl} = photo;

title = title.trim();
url = url.trim();
thumbnailUrl = thumbnailUrl.trim();

//Completación
if(title.length == 0){
    throw new ValidationError("Todos los campos deben ser completados")
}
if(url.length == 0){
    throw new ValidationError("Todos los campos deben ser completados")
}
if(thumbnailUrl.length == 0){
    throw new ValidationError("Todos los campos deben ser completados")
}

//Title
if(title.length<10 || title.length>50){
    throw new ValidationError("Revise extensión del título");
}

//URL
if(url.length<10 || url.length>50){
    throw new ValidationError("Revise extensión de la URL");
}
https = url.split(":")
if(https[0] != "https"){
    throw new ValidationError("Revise HTTPS")
}

//ThumbnailURL
if(thumbnailUrl.length<10 || thumbnailUrl.length>50){
    throw new ValidationError("Revise extensión del thumbnailURL");
}

}
module.exports = {
    save
}