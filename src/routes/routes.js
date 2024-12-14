const { Router } = require('express')
const { handleGetClientes, handleCreateCliente, handleUpdateCliente, handleDeleteCliente, handleSearchClientes } = require('../controllers/clientes.controller')
const { handleGetTodos, handleCreateTodo } = require('../controllers/todos.controller')
const { handleGetPersonal } = require('../controllers/personal.controller')
const { handleGetInmuebles,
    handleGetSingleInmueble,
    handleGetInmueblesFiltered
} = require('../controllers/inmueble.controller')

const router = Router()

router.get('/clientes', handleGetClientes)
router.get('/clientes/buscar', handleSearchClientes)
router.post('/clientes', handleCreateCliente)
router.put('/clientes/:id', handleUpdateCliente)
router.delete('/clientes/:id', handleDeleteCliente)

router.get('/personal/filtered', handleGetPersonal)

// inmuebles
router.get('/inmuebles', handleGetInmuebles)
router.get('/inmuebles/filtered', handleGetInmueblesFiltered)
router.get('/inmuebles/:id', handleGetSingleInmueble)

router.get('/todos', handleGetTodos)
router.post('/todos', handleCreateTodo)



module.exports = router