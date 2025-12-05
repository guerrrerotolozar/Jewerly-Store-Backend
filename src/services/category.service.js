import categoryModel from "../models/Category.model.js"
// El servicio: se debe encargar solo de la comunicacion directa con la base de datos 
const dbRegistercategory = async( newcategory) => {
  return await categoryModel.create ( newcategory);   // async/await porque el modelo retorna una promesa
}

const dbGetAllcategory = async () => {
    return  await categoryModel.find();
}

const dbGetcategoryById = async ( _id ) => {
    return await categoryModel.findOne({_id }); 
}

const dbDeletcategoryById = async (_id ) => {
    return await categoryModel.findByIdAndDelete({_id})
}

export {
    dbRegistercategory,
    dbGetAllcategory,
    dbGetcategoryById,
    dbDeletcategoryById
}