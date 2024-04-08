import { login } from "../repos/authRepo.js";
import User from "../model/usersModel.js";
import bcryptjs from "bcryptjs";

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await User.findOne({ where: { email: email } });

  const checkedPassword = await bcryptjs.compare(password, foundUser.password);
  if (!checkedPassword) {
    return res.status(401).json({ message: "Not today Satan" });
  }
};

export { loginController };
