const { Router } = require('express')
const { handleGetClientes, handleCreateCliente, handleUpdateCliente, handleDeleteCliente, handleSearchClientes } = require('../controllers/clientes.controller')
const { handleGetTodos, handleCreateTodo } = require('../controllers/todos.controller')

const router = Router()

router.get('/clientes', handleGetClientes)
router.get('/clientes/buscar', handleSearchClientes)
router.post('/clientes', handleCreateCliente)
router.put('/clientes/:id', handleUpdateCliente)
router.delete('/clientes/:id', handleDeleteCliente)

router.get('/todos', handleGetTodos)
router.post('/todos', handleCreateTodo)



module.exports = router