import { Router } from 'express'

import { registerCollection, deleteCollectionById, getAllCollections, getCollectionById } from '../controllers/collection.controller.js';

const router = Router();

// DEfinicion de las rutas (Endpoints)
router.post('/', registerCollection);
router.get('/', getAllCollections);
router.get('/:idcollection', getCollectionById);  //parametrizar la ruta: Crear un parametro en la ruta que funje como variable
router.delete('/:idcollection', deleteCollectionById);


export default router;