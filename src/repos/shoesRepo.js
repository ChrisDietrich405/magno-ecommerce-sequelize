import Shoes from "../model/shoesModel.js";

const addShoes = async (name) => {
  return await Shoes.create({ name });
};

export { addShoes };

