import { PrismaClient } from '@prisma/client';
import { compare } from '../helpers/handleBcrypt.js';

const db = new PrismaClient();

export async function loginUser(email, password) {
  try {
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

    const compareHash = await compare(password, findUser[0].password);

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
