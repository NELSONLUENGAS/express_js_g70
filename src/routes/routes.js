const { Router } = require('express')
const { handleGetClientes, handleCreateCliente } = require('../controllers/clientes.controller')
const { handleGetTodos, handleCreateTodo } = require('../controllers/todos.controller')

const router = Router()

router.get('/clientes', handleGetClientes)
router.post('/clientes', handleCreateCliente)

router.get('/todos', handleGetTodos)
router.post('/todos', handleCreateTodo)



module.exports = router