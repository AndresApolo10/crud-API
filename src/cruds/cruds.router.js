const router = require('express').Router()

const crudServices = require('./cruds.services')

router.get('/cruds', crudServices.getCruds)

router.post('/cruds', crudServices.createNewTodo)

router.get('/cruds/:id', crudServices.getOneTodo)

module.exports = router