import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export async function getUsers() {
  try {
    const arrayUsers = db.users.findMany();
    return arrayUsers;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
