import { promisify } from 'util';
import { getUser } from '../users-logic/getUser.js';
import jwt from 'jsonwebtoken';

export const authController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUser(email, password);

    // JWT Logic
    const { id: userId, email: userEmail } = user[0];
    const token = jwt.sign(
      { userId: userId, email: userEmail },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_TIME_EXPIRES,
      }
    );

    // COOKIES OPTIONS
    // const cookiesOptions = {
    //   expires: new Date(Date.now() + process.env.COOKIES_TIME_EXPIRES * 1000),
    //   httpOnly: true,
    //   secure: true,
    // };
    // res.cookie('jwt', token, cookiesOptions).json({ user: user, token: token });

    res.setHeader('JWT-User-Token', token).json({ user: user, token: token });
    // Se setea el header pero en: '/login'
    // Ver como setear en: '/'
  } catch (error) {
    console.log('Error in controller: ', error);
    res.status(500).json({ message: error.message });
  }
};
