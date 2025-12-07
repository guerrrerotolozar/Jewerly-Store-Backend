import productModel from "../models/Product.model.js";

const dbRegisterProduct = async (newProduct) => {
    return await productModel.create(newProduct);   // async/await porque el modelo retorna una promesa
}

const dbGetAllProducts = async () => {
    return await productModel.find({ isActive: true });
}

const dbGetProductsById = async (_id) => {
    return await productModel.findOne({ _id, isActive: true });
}

const dbDeleteProductById = async (_id) => {
    return await productModel.findOneAndDelete({ _id });
    return await productModel.findByIdAndDelete({ _id })
}

export {
    dbRegisterProduct,
    dbGetAllProducts,
    dbGetProductsById,
    dbDeleteProductById
}