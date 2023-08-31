import jwt from 'jsonwebtoken';

const jwtAuth = async (userId) => {
  try {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIME_EXPIRES,
    });

    // const cookiesOptions = {
    //   expires: new Date(
    //     Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 1000
    //   ),
    //   httpOnly: true,
    //   secure: true,
    // };

    // return { token, cookiesOptions };
    return token;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export default jwtAuth;
