import express from 'express';
import { indexPage, productsPage, addProduct } from '../controllers';
import { modifyEmptyInfo } from '../middleware';

const indexRouter = express.Router();

indexRouter.post('/products', modifyEmptyInfo, addProduct);
indexRouter.get('/', indexPage);
indexRouter.get('/products', productsPage);


export default indexRouter;