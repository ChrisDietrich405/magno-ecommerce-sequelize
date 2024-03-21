import User from "../model/usersModel.js";

const addUser = async (body) => {
  const { firstName, lastName, isAdmin } = body;
  console.log(firstName)
  return await User.create({ firstName, lastName, isAdmin });
};

export { addUser };

