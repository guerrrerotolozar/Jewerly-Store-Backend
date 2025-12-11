import { verifyEncriptedPassword } from "../helpers/bcrypt.helper.js";
import { dbGetUserByEmail } from "../services/user.service.js";

const loginUser = async (req, res) => {
    const inputData = req.body;

    //paso 1: verificar si el usuario NO existe
    const userFound = await dbGetUserByEmail(inputData.email);

    if (!userFound) {
        return res.json({ msg: 'Usuario no existe. Por favor haga su registro' });
    }
    //paso 2: verificar si la contrasenia coincide 
    const isMatch = verifyEncriptedPassword(inputData.password, userFound.password);
    if (!isMatch) {
        return res.json({ msg: 'Credenciales invalidas' });
    }

    //paso 3: generar credencial digital (token)

    // paso 4: Eliminar propiedades con datos sensibles 

    //paso 5: responder al cliente 
    res.json({ msg: 'usuario logueado! :)' });
}

export {
    loginUser
}