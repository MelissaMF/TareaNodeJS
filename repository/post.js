const posts = [
    {postid: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio repehenderit", body: "quia et suscipfsdf recusandae expedita et cum nreprehenderit molestiae t ut quas totam nnostrum rerum est autem sunt rem eveniet archetcto"}
]

const getAll = () => posts;

const getById = id => {return posts.find(post => post.id == id)};

const getUser = userId => {return posts.find(post => post.userId == userId)};

module.exports ={
    getAll,
    getById,
    getUser
}