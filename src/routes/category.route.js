import {Router} from 'express' 

import { registercategory,getcategoryById ,getAllcategory , deletecategoryById } from '../controllers/category.controller.js';

const router = Router();

// DEfinicion de las rutas (Endpoints)
router.post( '/', registercategory );
router.get( '/', getAllcategory );
router.get('/:idcategory', getcategoryById );  //parametrizar la ruta: Crear un parametro en la ruta que funje como variable
router.delete('/:idcategory', deletecategoryById );


export default router;