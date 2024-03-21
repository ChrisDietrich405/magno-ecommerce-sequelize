import { addUser } from "../repos/usersRepo.js";

const addUserController = async (req, res) => {
  await addUser(req.body)
  res.status(201).json("User created")
};

export { addUserController };
