import {
    dbRegisterCategory,
    dbGetAllCategories,
    dbGetCategoryById,
    dbDeleteCategoryById,
} from '../services/category.service.js';

const registerCategory = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        const dataRegistered = await dbRegisterCategory(data);

        res.status(201).json({
            msg: 'Categoría creada correctamente',
            category: dataRegistered,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se pudo registrar la categoría',
            error: error.message,
        });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await dbGetAllCategories();

        res.status(200).json({
            msg: 'Lista de categorías',
            data: categories,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se pudo obtener las categorías',
            error: error.message,
        });
    }
};

const getCategoryById = async (req, res) => {
    try {
        const { idcategory: idCategory } = req.params;

        const category = await dbGetCategoryById(idCategory);

        if (!category) {
            return res.status(404).json({
                msg: 'Categoría no encontrada',
            });
        }

        res.status(200).json({
            category,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se pudo obtener la categoría',
            error: error.message,
        });
    }
};

const deleteCategoryById = async (req, res) => {
    try {
        const { idcategory: idCategory } = req.params;

        const deleted = await dbDeleteCategoryById(idCategory);

        if (!deleted) {
            return res.status(404).json({
                msg: 'Categoría no encontrada',
            });
        }

        res.status(200).json({
            msg: 'Categoría eliminada correctamente',
            categoryDeleted: deleted,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se pudo eliminar la categoría',
            error: error.message,
        });
    }
};

export { registerCategory, getCategoryById, getAllCategories, deleteCategoryById };
