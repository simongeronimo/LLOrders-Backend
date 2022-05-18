import express from 'express';
import { indexPage, productsPage, addProduct, updateProductQuantityWithId } from '../controllers';
import { modifyEmptyInfo } from '../middleware';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.post('/addProducts', modifyEmptyInfo, addProduct);
indexRouter.post('/saveProducts', updateProductQuantityWithId);
indexRouter.post('/products', productsPage);


export default indexRouter;