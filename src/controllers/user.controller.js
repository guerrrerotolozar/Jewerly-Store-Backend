import { registerUser } from '../services/user.service.js';


const createUser = async ( req, res ) => {
    const data = req.body;           //extraer el cuerpo de la paeticion

    const dataCreate = await registerUser(data)

    res.json({
        msg: 'crear usuario',
        dataCreate                        //Nueva forma para evitar poner el valor tambien 
    })

}


export {createUser}