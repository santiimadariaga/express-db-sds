import { getUser } from '../users-logic/getUser.js';
import jwt from 'jsonwebtoken';

export const authController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUser(email, password);

    // JWT Logic
    const { id: userId, email: userEmail, name: userName } = user[0];
    const token = jwt.sign(
      { userId: userId, email: userEmail, name: userName },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_TIME_EXPIRES,
      }
    );

    res.status(200).json({ user: user, token: token });
  } catch (error) {
    console.log('Error in controller: ', error);
    res.status(500).json({ message: error.message });
  }
};
