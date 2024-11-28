const Cliente = require('../models/Cliente')


const handleGetClientes = async (req, res) => {
    try {
        const response = await Cliente.obtenerTodos()

        res.status(200).json(response)
    } catch (error) {
        res.status(500)
            .json({
                msg: 'Server Error',
                error: error.message
            })
    }
}

const handleCreateCliente = async (req, res) => {
    try {
        const { nombre, email } = req.body
        const response = await Cliente.agregar(nombre, email)

        res.status(201)
            .json({
                msg: 'Cliente creado con éxito 🤙',
                data: response
            })
    } catch (error) {
        res.status(500)
            .json({
                msg: 'Server Error',
                error: error.message
            })
    }
}

module.exports = {
    handleGetClientes,
    handleCreateCliente
}