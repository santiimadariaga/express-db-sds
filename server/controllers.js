import { getUsers } from '../users-logic/getUsers.js';
import { createUser } from '../users-logic/createUser.js';
import { deleteUser } from '../users-logic/deleteUser.js';
import { getUserByToken } from '../users-logic/getUserByToken.js';

export const getAllUsersController = async (req, res) => {
  try {
    const result = await getUsers();
    console.log('Users: ', result);
    res.json(result);
  } catch (error) {
    console.log('Error in controller 1: ', error);
    res.status(500).json({ message: error.message });
  }
};

export const getUserByTokenController = async (req, res) => {
  try {
    const { token } = req.body;
    const result = await getUserByToken(token);
    res.send(result?.name);
  } catch (error) {
    console.log('Error in controller 2: ', error);
    res.status(500).json({ message: error.message });
  }
};

export const createUserController = async (req, res) => {
  try {
    const userInput = req.body;
    const newUser = await createUser(userInput);
    console.log('New user: ', newUser);
    res.json(newUser);
    return newUser;
  } catch (error) {
    console.log('Error in controller 3: ', error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(+id);
    console.log(`User deleted: `, id);
    res.json({ message: `User ${id} deleted successfully.` });
  } catch (error) {
    console.log('Error in controller 4: ', error);
    res.status(500).json({ message: error.message });
  }
};
