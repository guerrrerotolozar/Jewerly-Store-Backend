import express, { json } from 'express' 

const router = express.Router();


router.post( '/', ( req, res ) => {
    const data = req.body;           //extraer el cuerpo de la paeticion

    console.log(data)

    res.json({
        msg: 'crear usuario',
        data                        //Nueva forma    para evitar poner el valor tambien 
    })

} );

// router.get('/alo', (req, res) => {
//     res.send('<h1>alo</h1>')
// });

export default router;