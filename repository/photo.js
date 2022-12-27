const photos = [
    {albumId:1, id:1, title: "accusamus beatae ad facilis cum similique qui sunt", url: "https://via.placeholder.com/600/92c952", thumbnailUrl: "https://via.placeholder.com/150/92c952"}
]

const getAll = () => photos;

const getById = id => {return photos.find(photo => photo.id == id)};

const getAlbum = albumId => {return photos.find(photo => photo.albumId == albumId)};

module.exports ={
    getAll,
    getById,
    getAlbum
}