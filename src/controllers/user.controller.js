import userModel from '../models/User.model.js';


const createUser = async ( req, res ) => {
    const data = req.body;           //extraer el cuerpo de la paeticion
    
    const dataCreate = await userModel.create(data);

    res.json({
        msg: 'crear usuario',
        dataCreate                        //Nueva forma para evitar poner el valor tambien 
    })

}


export {createUser}