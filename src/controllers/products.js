import Model from '../models/model';

const productsModel = new Model('products');

export const productsPage = async (req, res) => {
  try {
    let locations = "0";
    if(req.body.locations != null){
       locations  = req.body.locations;
    }
    const data = await productsModel.select('id, name, info, quantity, quantity_case', locations);
    res.status(200).json({ products: data.rows });
  } catch (err) {
    res.status(200).json({ products: err.stack });
  }
};

export const addProduct = async (req, res) => {
  const { name, location, info, quantity, quantity_case } = req.body;
  const columns = 'name, location, info, quantity, quantity_case';
  const values = `'${name}', '${location}', '${info}', '${quantity}', '${quantity_case}'`;
  try {
    const data = await productsModel.insertWithReturn(columns, values);
    res.status(200).json({ products: data.rows });
  } catch (err) {
    res.status(200).json({ products: err.stack });
  }
};

export const updateProductQuantityWithId = async (req, res) => {
  const { ids, quantities, quantities_case } = req.body;
  try {
    const data = await productsModel.updateQuantityWithId(ids, quantities, quantities_case);
    res.status(200).json({ products: data.rows });
  } catch (err) {
    res.status(200).json({ products: err.stack });
  }
};