import express from 'express';
import { indexPage, productsPage } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/products', productsPage);

export default indexRouter;