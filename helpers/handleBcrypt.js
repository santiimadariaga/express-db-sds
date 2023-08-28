import bcrypt from 'bcryptjs';

export const encrypt = async (textToHashing) => {
  const hash = await bcrypt.hash(textToHashing, 8);
  return hash;
};

export const compare = async (passwordInput, passwordDB) => {
  return await bcrypt.compare(passwordInput, passwordDB);
};
