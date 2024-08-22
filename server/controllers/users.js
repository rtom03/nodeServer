import { v4 as uuidv4 } from 'uuid';

let users = [{
    "firstName": "John ",
    "lastName": "Doe",
    "age": 25,
    "id": uuidv4()
}, {
    "firstName": "Jane ",
    "lastName": "Doe",
    "age": 25,
    "id": uuidv4()
}, {
    "firstName": "Luis ",
    "lastName": "Doe",
    "age": 25,
    "id": uuidv4()
}]

export const createUser = (req, res) => {
    const user = req.body
    const userWIthId = { ...user, id: uuidv4() }
    users.push(userWIthId)
    res.send(`User with the name ${user.firstName} added to the database`)
}

export const getUsers = (req, res) => {
    res.send(users)
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id)
    res.send(`User with ${id} Deleted`)
}


export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.params;

    const userToBeUpdated = users.find((user) => user.id === id)

    if (firstName) userToBeUpdated.firstName = firstName
    if (lastName) userToBeUpdated.lastName = lastName
    if (age) userToBeUpdated.age = age
    res.send(`User with  ${id} has been updated`)
}