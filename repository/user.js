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

const deleteById = async (id) => {
    const conexion = await conectar()
    const query = `
          UPDATE user
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
    delete: deleteById
}