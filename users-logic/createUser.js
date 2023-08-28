import { PrismaClient } from '@prisma/client';
import { encrypt } from '../helpers/handleBcrypt.js';

const db = new PrismaClient();

export async function createUser(userInput) {
  try {
    const passInput = userInput.password;
    let passHash = await encrypt(passInput);

    const newUser = db.users.create({
      data: {
        name: userInput.name,
        email: userInput.email,
        password: passHash,
      },
    });
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
