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

const exists = async (id) => {
    try {
        const SQLQuery = "SELECT * FROM clientes WHERE id = $1"
        const SQLValues = [id]

        const { rows } = await DB.query(SQLQuery, SQLValues)

        return rows.length ? true : false
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

const buscarClientes = async (query) => {
    try {
        const SQLQuery = "SELECT * FROM clientes WHERE nombre ILIKE $1"
        const SQLValues = [query]

        const { rows } = await DB.query(SQLQuery, SQLValues)

        return rows
    } catch (error) {
        throw error
    }
}

const actualizarCliente = async (id, nombre, email) => {
    try {
        const SQLQuery = "UPDATE clientes SET nombre = $1, email = $2 WHERE id = $3 RETURNING *"
        const SQLValues = [nombre, email, id]

        const { rows } = await DB.query(SQLQuery, SQLValues)

        return rows
    } catch (error) {
        throw error
    }
}

const eliminarCliente = async (id) => {
    try {
        const SQLQuery = "DELETE FROM clientes WHERE id = $1 RETURNING *"
        const SQLValues = [id]

        const { rows } = await DB.query(SQLQuery, SQLValues)

        return rows
    } catch (error) {
        throw error
    }
}


module.exports = {
    agregar,
    obtenerTodos,
    actualizarCliente,
    eliminarCliente,
    buscarClientes,
    exists
}