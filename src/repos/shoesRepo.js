import Shoes from "../model/shoesModel.js";

const addShoes = async (body) => {
  const { brand, name, price} = body
  return await Shoes.create({ brand, name, price });
};

export { addShoes };
