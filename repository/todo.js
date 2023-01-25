const {conectar} = require ('./conexion')

const getAll = async () => {
    const conexion = await conectar ()
    const query = `
        SELECT *
        FROM
        todo
    `
    const result = await conexion.query(query)
    conexion.release()
    return result.rows
}

const save = async ({userId, title, complete}) => {
    const conexion = await conectar()
    const query = `
    INSERT INTO todo
        (userId, title, complete)
    VALUES
        ($1,$2, $3)
    RETURNING *
    `
    const values = [userId, title, complete]
    const result = await conexion.query(query,values)
    conexion.release()
    return result.rows[0] 
}

const getById = async (id) => {
    const conexion = await conectar ()
    const query = `
        SELECT *
        FROM
        todo
        WHERE id = $1
    `
    const { rows:[todo] } = await conexion.query(query, [id])
    conexion.release()
    return todo
}

const getUser = userId => {return todos.find(todo => todo.userId == userId)};

module.exports ={
    getAll,
    save,
    getById,
    getUser
}