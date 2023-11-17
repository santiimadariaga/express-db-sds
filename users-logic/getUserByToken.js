import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

// const db = new PrismaClient();

export async function getUserByToken(token) {
  try {
    // console.log('token in logic', token);
    const data = jwt.verify(token, process.env.JWT_SECRET);
    console.log(data);

    // const findUser = await db.users.findMany({
    //   where: {
    //     password: data,
    //   },
    //   select: {
    //     id: true,
    //     name: true,
    //     email: true,
    //     password: true,
    //     created_at: true,
    //     updated_at: true,
    //     products: {
    //       select: {
    //         id: true,
    //         name: true,
    //         category: true,
    //         price: true,
    //       },
    //     },
    //   },
    // });

    // const compareHash = await compare(password, findUser[0].password);

    // // if (compareHash) {
    // //   // INICIO DE SESION OK
    // //   return findUser;
    // // }
    // // console.log('Wrong password');
    // // return data;
  } catch (error) {
    console.log('ERROR', error);
    // throw new Error(error);
  }
}
