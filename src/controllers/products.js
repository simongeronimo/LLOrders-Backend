import Model from '../models/model';

const productsModel = new Model('products');

export const productsPage = async (req, res) => {
  try {
    const data = await productsModel.select('name, info, quantity');
    res.status(200).json({ products: data.rows });
  } catch (err) {
    res.status(200).json({ products: err.stack });
  }
};

export const addProduct = async (req, res) => {
  const { name, info, quantity } = req.body;
  const columns = 'name, info, quantity';
  const values = `'${name}', '${info}', '${quantity}'`;
  try {
    const data = await productsModel.insertWithReturn(columns, values);
    res.status(200).json({ products: data.rows });
  } catch (err) {
    res.status(200).json({ products: err.stack });
  }
};