import express from 'express'
import { deleteProductById, getAllProducts, getProductsById, registerProduct, updateProductsById } from '../controllers/product.controller.js';

const router = express.Router();

router.post('/', registerProduct);
router.get('/', getAllProducts);
router.get('/:idProducts', getProductsById);
router.delete('/:idProducts', deleteProductById);
router.patch('/:idProducts', updateProductsById);



export default router;