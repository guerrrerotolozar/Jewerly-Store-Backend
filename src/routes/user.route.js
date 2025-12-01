import express from 'express' 

const router = express.Router();

// router.get( '/', ( req, res ) => {
//     res.json({ msg: 'Obtiene todos los usuarios' });
// } );

// router.post( '/', ( req, res ) => {
//     res.json({ msg: 'Crear un usuario' });
// } );

// router.put( '/', ( req, res ) => {
//     res.json({ msg: 'Actualiza todos las propiedades del usuario' });
// } );

// router.patch( '/', ( req, res ) => {
//     res.json({ msg: 'Actualiza parcialmente 1 o todas las propiedades del usuario' });
// } );

// router.delete( '/', ( req, res ) => {
//     res.json({ msg: 'Elimina un usuario' });
// } );

router.post( '/',( req, res ) => {
    const data = req.body;

    console.log( data);
    res.json({ msg:'create users', data
    })
})

export default router;