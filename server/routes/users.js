import express from 'express';
import { getUser, getUsers, updateUser, deleteUser, createUser } from '../controllers/users.js';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();


router.post('/', createUser)

// router.post('/', createUser)

router.get('/', getUsers)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)


export default router;