import { PrismaClient } from '@prisma/client';
import { compare } from '../helpers/handleBcrypt.js';

const db = new PrismaClient();

export async function getUser(email, password) {
  try {
    // console.log(email, password);
    const findUser = await db.users.findMany({
      where: {
        email: email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        created_at: true,
        updated_at: true,
        products: {
          select: {
            id: true,
            name: true,
            category: true,
            price: true,
          },
        },
      },
    });

    // console.log(findUser);

    const compareHash = await compare(password, findUser[0].password);
    // console.log(compareHash);

    if (compareHash) {
      // INICIO DE SESION OK
      return findUser;
    }
    console.log('Wrong password');
    return 'Wrong password';
  } catch (error) {
    console.log('Email not found');
    return 'Email not found';
  }
}
