import { Router } from 'express'
import { registerUser } from '../controllers/user.controller.js';
import { loginUser } from '../controllers/auth.controller.js';

const router = Router ();

//Definir las rutas para la autenticacion 
router.post('/login', loginUser);
router.post('/register', registerUser);
//router.get('/renew-token');

export default router