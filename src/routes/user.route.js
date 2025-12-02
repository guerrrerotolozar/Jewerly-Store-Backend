import { Router } from 'express' 
import { createUser } from '../controllers/user.controller.js';

const router = Router();


router.post( '/',createUser );

// router.get('/alo', (req, res) => {
//     res.send('<h1>alo</h1>')
// });

export default router;

