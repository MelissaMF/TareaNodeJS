const {conectar} = require ('./conexion')

const getAll = async () => {
    const conexion = await conectar ()
    const query = `
        SELECT *
        FROM
        post
    `
    const result = await conexion.query(query)
    conexion.release()
    return result.rows
}

const save = async ({postId, title, body}) => {
    const conexion = await conectar()
    const query = `
    INSERT INTO post
        (postId, title, body)
    VALUES
        ($1,$2, $3)
    RETURNING *
    `
    const values = [postId, title, body]
    const result = await conexion.query(query,values)
    conexion.release()
    return result.rows[0] 
}

const getById = async (id) => {
    const conexion = await conectar ()
    const query = `
        SELECT *
        FROM
        post
        WHERE id = $1
    `
    const { rows:[post] } = await conexion.query(query, [id])
    conexion.release()
    return post
}
const getUser = userId => {return posts.find(post => post.userId == userId)};

module.exports ={
    getAll,
    save,
    getById,
    getUser
}