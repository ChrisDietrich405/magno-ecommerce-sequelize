import User from "../model/usersModel.js";

const createAccount = async (body) => {
  const { firstName, lastName, email, password, isAdmin } = body;
  return await User.create({ firstName, lastName, email, password, isAdmin });
};

export { createAccount };

