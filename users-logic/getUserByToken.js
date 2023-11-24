import jwt from 'jsonwebtoken';

export async function getUserByToken(token) {
  try {
    // console.log('token in logic', token);
    const data = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    // console.log('ERROR ==>', error);
    // throw new Error(error);
    return;
  }
}
