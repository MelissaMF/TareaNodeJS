const { conectar } = require('./conexion')

const getAll = async () => {
  const conexion = await conectar()
  const query = `
        SELECT *
        FROM
        comment
    `
  const result = await conexion.query(query)
  conexion.release()
  return result.rows
}

const save = async ({ postId, name, email, body }) => {
  const conexion = await conectar()
  const query = `
    INSERT INTO comment
        (postId, name, email, body)
    VALUES
        ($1,$2, $3, $4)
    RETURNING *
    `
  const values = [postId, name, email, body]
  const result = await conexion.query(query, values)
  conexion.release()
  return result.rows[0]
}

const getById = async (id) => {
  const conexion = await conectar()
  const query = `
        SELECT *
        FROM
        comment
        WHERE id = $1
    `
  const { rows: [comment] } = await conexion.query(query, [id])
  conexion.release()
  return comment
}

const updateById = async (id) => {
  const conexion = await conectar()
  const query = `
          UPDATE comment
          SET updated_at = now()
          WHERE id = $1
          RETURNING *
      `
  const result = await conexion.query(query, [id])

  conexion.release()

  return result.rows[0]
}

const deleteById = async (id) => {
  const conexion = await conectar()
  const query = `
          UPDATE comment
          SET deleted_at = now()
          WHERE id = $1
          RETURNING *
      `
  const result = await conexion.query(query, [id])

  conexion.release()

  return result.rows[0]
}

module.exports = {
  getAll,
  save,
  getById,
  update: updateById,
  delete: deleteById
}
