import { Router } from 'express';
import * as controllers from '../server/controllers.js';
import { authController } from '../auth/authController.js';

export const usersRouter = Router();

// register
usersRouter.post('/register', controllers.createUserController);

// login
usersRouter.post('/login', authController);

// user
usersRouter.post('/userByToken', controllers.getUserByTokenController);
usersRouter.delete('/user/:id', controllers.deleteUserController);
usersRouter.get('/users', controllers.getAllUsersController);
// usersRouter.put('/login', controllers.getAllUsersController);
