import express, { Router } from 'express';

import { getUsers, getUser, deleteUser, updateUser, createUser } from '../controllers/users.js';



const router = express.Router();


router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;