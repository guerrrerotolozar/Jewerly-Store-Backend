import categoryModel from '../models/Category.model.js';

// El servicio se encarga de la comunicación directa con la base de datos
const dbRegisterCategory = async (newCategory) => {
    return await categoryModel.create(newCategory);
};

const dbGetAllCategories = async () => {
    return await categoryModel
        .find({ isActive: true }) // solo activas (opcional)
        .select('name slug parent isActive') // selecciona solo lo necesario
        .sort({ name: 1 }); // 1 = ascendente
};

const dbGetCategoryById = async (_id) => {
    return await categoryModel.findOne({ _id });
};

const dbDeleteCategoryById = async (_id) => {
    return await categoryModel.findByIdAndDelete({ _id });
};

export {
    dbRegisterCategory,
    dbGetAllCategories,
    dbGetCategoryById,
    dbDeleteCategoryById
};
