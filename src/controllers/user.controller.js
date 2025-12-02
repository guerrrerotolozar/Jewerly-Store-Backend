import userModel from "../models/User.models.js";
const createUser =  async ( req, res ) => {
    const data = req.body;

    console.log( data);

    //Registrar los datos usando el userModel
   const dataRegistered = await userModel.create( data );   //Registrar los datos en la base de datos

    // Responder al cliente
    res.json({ msg:'create users',
         //data: data,             // Forma tradicional
         dataRegistered            // ECMAScript 2015 
    });
} 


export {
    createUser
};