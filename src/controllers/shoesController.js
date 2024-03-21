import { addShoes } from "../repos/shoesRepo.js";

const addShoesController = async (req, res) => {
  const newShoes = await addShoes(req.body);
  return res.status(201).json(newShoes);
};

export { addShoesController };
