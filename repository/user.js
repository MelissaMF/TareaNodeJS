const {conectar} = require ('./conexion')

const getAll = async () => {
    const conexion = await conectar ()
    const query = `
        SELECT *
        FROM
        user
    `
    const result = await conexion.query(query)
    conexion.release()
    return result.rows
}

const getById = id => {return users.find(user => user.id == id)};

module.exports ={
    getAll,
    getById
}