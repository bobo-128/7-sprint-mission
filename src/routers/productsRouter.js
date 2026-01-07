import express from 'express';
import { withAsync } from '../lib/withAsync.js';
import {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductList,
  createComment,
  getCommentList,
  favoriteProduct,
} from '../controllers/productsController.js';
import { authMiddleware, optionalAuth } from '../middlewares/authMiddleware.js';


const productsRouter = express.Router();

productsRouter
  .route('/')
  .post(authMiddleware, withAsync(createProduct))
  .get(withAsync(getProductList));

productsRouter
  .route('/:id')
  .get(optionalAuth, withAsync(getProduct))
  .patch(withAsync(updateProduct))
  .delete(withAsync(deleteProduct));

productsRouter
  .route('/:id/comments')
  .post(authMiddleware, withAsync(createComment))
  .get(withAsync(getCommentList));

productsRouter.post('/:id/favorite', authMiddleware, withAsync(favoriteProduct));
export default productsRouter;
