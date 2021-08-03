import bcrypt from "bcrypt";

const saltRounds = 10;

export const validPassword = async (
  plainTextPassword: string,
  hash: string
) => {
  return await bcrypt.compare(plainTextPassword, hash);
};

export const encryptPassword = async (password: string) => {
  return await bcrypt.hash(password, saltRounds);
};
