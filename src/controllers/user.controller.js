// controlador: se debe encargar de recibir las peticiones y responder a ellas
import { registerUser } from "../services/user.services.js";
const createUser =  async ( req, res ) => {

    // Se controla la excepcion que ocurre en el paso 2
    try{
        //Paso 1: extraer el cuerpo de la peticion
        const data = req.body;    

        //Mostrar en la consola el cuerpo de la peticion
        console.log( data);
    
        //Paso 2: Registrar los datos usando el userModel
       const dataRegistered = await registerUser ( data );   //Registrar los datos en la base de datos
    
        //Paso 3: Responder al cliente
        res.json({ 
            msg:'create users',
             //data: data,             // Forma tradicional
             dataRegistered            // ECMAScript 2015 
        });
    }   
    catch (error) {
        console.error( error );
        res.json({
            msg: 'Error: No se pudo crear el usuario'
        });
    }
} 
    
export {
    createUser
}