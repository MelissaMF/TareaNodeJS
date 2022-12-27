const todos = [
    {userId:1, id:1, title:"delectus aut autem", completed:"false"}
]

const getAll = () => todos;

const getById = id => {return todos.find(todo => todo.id == id)};

const getUser = userId => {return todos.find(todo => todo.userId == userId)};

module.exports ={
    getAll,
    getById,
    getUser
}