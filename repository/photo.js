const {conectar} = require ('./conexion')

const getAll = async () => {
    const conexion = await conectar ()
    const query = `
        SELECT *
        FROM
        photo
    `
    const result = await conexion.query(query)
    conexion.release()
    return result.rows
}

const save = async ({albumId, title, url, thumbnailUrl}) => {
    const conexion = await conectar()
    const query = `
    INSERT INTO photo
        (albumId, title, url, thumbnailUrl)
    VALUES
        ($1,$2, $3, $4)
    RETURNING *
    `
    const values = [albumId, title, url, thumbnailUrl]
    const result = await conexion.query(query,values)
    conexion.release()
    return result.rows[0] 
}

const getById = async (id) => {
    const conexion = await conectar ()
    const query = `
        SELECT *
        FROM
        photo
        WHERE id = $1
    `
    const { rows:[photo] } = await conexion.query(query, [id])
    conexion.release()
    return photo
}

const deleteById = async (id) => {
    const conexion = await conectar()
    const query = `
          UPDATE photo
          SET deleted_at = now()
          WHERE id = $1
          RETURNING *
      `
    const result = await conexion.query(query, [id])
  
    conexion.release()
  
    return result.rows[0]
  }


module.exports ={
    getAll,
    save,
    getById,
    delete: deleteById
}