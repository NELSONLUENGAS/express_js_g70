const { DB } = require('../config/db')

const agregar = async (nombre, email) => {
    try {
        const SQLQuery = "INSERT INTO clientes VALUES(DEFAULT, $1, $2) RETURNING *"
        const SQLValues = [nombre, email]

        const { rows } = await DB.query(SQLQuery, SQLValues)

        return rows
    } catch (error) {
        throw error
    }
}

const obtenerTodos = async () => {
    try {
        const SQLQuery = "SELECT * FROM clientes"
        const { rows } = await DB.query(SQLQuery)

        return rows
    } catch (error) {
        throw error
    }
}


module.exports = {
    agregar,
    obtenerTodos
}