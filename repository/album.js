const albumes = [
    {userId:1, id:1, title:"quidem molestiae enim"}
]

const getAll = () => albumes;

const getById = id => {return albumes.find(album => album.id == id)};

const getUser = userId => {return albumes.find(album => album.userId == userId)};


module.exports ={
    getAll,
    getById,
    getUser
}
