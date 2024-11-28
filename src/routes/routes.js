const { Router } = require('express')
const { handleGetClientes, handleCreateCliente } = require('../controllers/clientes.controller')

const router = Router()

router.get('/clientes', handleGetClientes)
router.post('/clientes', handleCreateCliente)



module.exports = router