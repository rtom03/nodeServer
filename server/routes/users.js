import express from 'express';
import bodyParser from 'body-parser'


const router = express.Router();

const users = [{
    firstName: "John",
    lastName: "Doe",
    age: 25
},
{
    firstName: "Mia",
    lastName: "Kunis",
    age: 25
}]

router.get('/', (req, res) => {
    // res.send('Welcome Users')
    res.send(users)
})

router.post('/', (req, res) => {
    const user = req.body
    users.push(user)
    res.send(`User with the name ${user.firstName} added to the database`)
})

export default router;