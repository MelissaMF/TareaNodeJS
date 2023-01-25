const { conectar } = require('./conexion')

const getAll = async () => {
    const conexion = await conectar ()
    const query = `
        SELECT *
        FROM
        album
    `
    const result = await conexion.query(query)
    conexion.release()
    return result.rows
}

const getById = async (id) => {
    const conexion = await conectar ()
    const query = `
        SELECT *
        FROM
        album
        WHERE id = $1
    `
    const { rows:[album] } = await conexion.query(query, [id])
    conexion.release()
    return album
}

const save = async ({userId, title}) => {
    const conexion = await conectar()
    const query = `
    INSERT INTO album
        (userId, title)
    VALUES
        ($1,$2)
    RETURNING *
    `
    const values = [userId, title]
    const result = await conexion.query(query,values)
    conexion.release()
    return result.rows[0] 
}

const deleteById = async (id) => {
    const conexion = await conectar()
    const query = `
          UPDATE album
          SET deleted_at = now()
          WHERE id = $1
          RETURNING *
      `
    const result = await conexion.query(query, [id])
  
    conexion.release()
  
    return result.rows[0]
  }

const getUser = userId => {return albumes.find(album => album.userId == userId)};


module.exports ={
    getAll,
    getById,
    save,
    getUser,
    delete: deleteById
}
