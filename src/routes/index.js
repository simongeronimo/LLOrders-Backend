import express from 'express';
import { indexPage, productsPage, addProduct, updateProductQuantityWithId } from '../controllers';
import { modifyEmptyInfo } from '../middleware';

const indexRouter = express.Router();

indexRouter.post('/products', modifyEmptyInfo, addProduct);
indexRouter.post('/saveProducts', updateProductQuantityWithId);
indexRouter.get('/', indexPage);
indexRouter.get('/products', productsPage);


export default indexRouter;