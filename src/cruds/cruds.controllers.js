const uuid = require('uuid')

const crudDB = [
    {
        id: 'b1ffad08-b0e7-4b6a-8b9e-2f42efc168c0',
        first_name: 'Andres',
        last_name: 'Apolo',
        email: 'andres10@hotmail.com',
        password: 'root',
        birthday: '1990/07/12'
    },
    {
        id: '6af2278d-45f5-49bc-8607-8ff2616d3e0b',
        first_name: 'Lionel',
        last_name: 'Messi',
        email: 'messi10@hotmail.com',
        password: 'root',
        birthday: '1987/06/23'
    },
];

const getAllTodos = () => {
    return crudDB
}

const getTodoById = (id) => {
    const data = crudDB.find(task => task.id === id)
    return data
}

const createTodo = (first_name, last_name, email, password, birthday) => {
    const newTodo = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    }
    crudDB.push(newTodo)
    return newTodo
}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo
}