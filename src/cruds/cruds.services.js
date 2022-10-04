const {getAllTodos, getTodoById, createTodo} = require('./cruds.controllers')

const getCruds = (req, res) => {
    const data = getAllTodos()
    res.status(200).json(data)
}

const getOneTodo = (req, res) => {
    const id = req.params.id
    const data = getTodoById(id)
        if(data){
            res.status(200).json(data)
        } else {
            res.status(404).json({id: id, message: 'Invalid ID'})
        }
}

const createNewTodo = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body

    if(first_name, last_name, email, password, birthday){
        const data = createTodo(first_name, last_name, email, password, birthday)
        res.status(201).json(data)
    } else {
        res.status(400),json({message: 'Missing Data'})
    }
}

module.exports = {
    getCruds,
    getOneTodo,
    createNewTodo
}