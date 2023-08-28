import { promisify } from 'util';
import { loginUser } from '../users-logic/getUser.js';
import jwtAuth from './jwtAuth.js';

export const authController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);

    // JWT Logic
    const userId = user[0].id;
    jwtAuth(+userId);

    const token = await jwtAuth();

    // const token = auth.token;
    // const cookiesOptions = auth.cookiesOptions;

    // res.cookie('jwt', token, cookiesOptions).send(user);
    res.cookie('jwt', token).send(user);
  } catch (error) {
    console.log('Error in controller: ', error);
    res.status(500).json({ message: error.message });
  }
};
