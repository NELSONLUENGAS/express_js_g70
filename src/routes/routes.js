const { Router } = require('express')
const path = require('path')
const { handleGetUsers, handleCreateUser, handleDeleteUser, handleUpdateUser } = require('../controllers/users.controller')

const router = Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'))
})

router.get('/users', handleGetUsers)

router.post('/users', handleCreateUser)

router.delete('/users/:id', handleDeleteUser)

router.patch('/users/:id', handleUpdateUser)


module.exports = router