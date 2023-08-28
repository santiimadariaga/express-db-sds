import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export async function deleteUser(id) {
  try {
    await db.users.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log('Error: ', error);
    throw error;
  }
}
