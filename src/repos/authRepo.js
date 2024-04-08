import User from "../model/usersModel.js";

const login = async (body) => {
  return await User.create({ firstName, lastName, email, password, isAdmin });
};

export { login };