import { createAccount } from "../repos/usersRepo.js";
import bcryptjs from "bcryptjs";
import { emailFormatValidation } from "../helpers/validation.js";

const createAccountController = async (req, res) => {
  const { firstName, lastName, email, password, isAdmin } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "Please add all information" });
  }

  if (emailFormatValidation(email)) {
    return res.status(400).json({ message: "Please add correct email format" });
  } 

  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);

  const newCustomer = {
    firstName,
    lastName,
    email,
    password: hashedPassword,
    isAdmin,
  };

  await createAccount(newCustomer);
  res.status(201).json("User created");
};

export { createAccountController };
