import { Router } from 'express';
import * as controllers from '../server/controllers.js';
import { authController } from '../auth/authController.js';

export const usersRouter = Router();

// register
usersRouter.post('/register', controllers.createUserController);

// login
usersRouter.post('/login', authController);

// gral
usersRouter.get('/users', controllers.getAllUsersController);
usersRouter.delete('/user/:id', controllers.deleteUserController);
// usersRouter.put('/login', controllers.getAllUsersController);
