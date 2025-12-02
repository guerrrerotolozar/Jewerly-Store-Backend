import userModel from "../models/User.model.js";

const registerUser = async(newUser) => {

    return await userModel.create(newUser);
}

export {
    registerUser
}