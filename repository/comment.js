const comments = [
    {postId:1, id:1, name: "id labore ex et quam laborum", email: "eliseo@gardner.biz", body:"laudantium enim quasi est magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reicindis et nam sapiente accusantium"}
]

const getAll = () => comments;

const getById = id => {return comments.find(comment => comment.id == id)};

const getPost = postId => {return comments.find(comment => comment.postId == postId)};

module.exports ={
    getAll,
    getById,
    getPost
}