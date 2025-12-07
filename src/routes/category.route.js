import { Router } from 'express';

import {
    registerCategory,
    getCategoryById,
    getAllCategories,
    deleteCategoryById,
} from '../controllers/category.controller.js';

const router = Router();

// Definición de las rutas (Endpoints)
router.post('/', registerCategory);
router.get('/', getAllCategories);
router.get('/:idcategory', getCategoryById); // el param de ruta sigue igual
router.delete('/:idcategory', deleteCategoryById);

export default router;
